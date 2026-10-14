import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center bg-white px-4 py-12">
      <div className="flex w-full max-w-sm flex-col items-center">
        <ProfileHeader profile={profile} />
        <ul className="mt-14 flex w-full max-w-80 flex-col gap-10">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
