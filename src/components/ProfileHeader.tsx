import Image from "next/image";
import type { Profile } from "@/types";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full bg-orange-100 shadow-[0_12px_32px_-8px_rgba(150,90,50,0.35)] ring-4 ring-white/80 sm:h-36 sm:w-36">
        {profile.imageUrl ? (
          <Image
            src={profile.imageUrl}
            alt={`${profile.name} 프로필 사진`}
            fill
            sizes="144px"
            className="object-cover"
            unoptimized
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-orange-700">
            {profile.name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900">{profile.name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-600">{profile.bio}</p>
    </header>
  );
}
