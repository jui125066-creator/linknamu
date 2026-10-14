import type { LinkItem, Profile } from "@/types";

export const profile: Profile = {
  name: "정의인",
  bio: "스튜디오드래곤 : 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐱 GitHub", url: "https://github.com/jui125066-creator" },
  { id: "instagram", title: "✍️ Instagram", url: "https://www.instagram.com/__j22n" },
  { id: "email", title: "📬 Email", url: "mailto:jui125066@naver.com" },
];
