import Image from "next/image";
import type { Profile } from "@/types";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-zinc-900 bg-emerald-100 sm:h-48 sm:w-48">
        {profile.imageUrl ? (
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="192px"
            className="object-cover"
            unoptimized
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-emerald-700">
            {profile.name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-10 text-xl font-bold text-zinc-900">{profile.name}</h1>
      <p className="mt-3 text-base text-zinc-600">{profile.bio}</p>
    </header>
  );
}
