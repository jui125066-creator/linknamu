import { MongoClient } from "mongodb";

// 개발 모드 핫 리로드 때 연결이 계속 새로 생기지 않도록 전역에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongo?: { uri: string; clientPromise: Promise<MongoClient> };
};

export function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
  }

  // 주소가 바뀌었으면(.env.local 수정) 새로 연결
  if (globalForMongo._mongo?.uri !== uri) {
    const clientPromise = new MongoClient(uri).connect();
    // 연결에 실패하면 캐시를 비워서 다음 요청 때 다시 시도
    clientPromise.catch(() => {
      if (globalForMongo._mongo?.clientPromise === clientPromise) {
        globalForMongo._mongo = undefined;
      }
    });
    globalForMongo._mongo = { uri, clientPromise };
  }
  return globalForMongo._mongo.clientPromise.then((client) => client.db());
}
