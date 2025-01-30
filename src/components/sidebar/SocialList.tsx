import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";
import Image from "next/image";

const SocialList = () => {
  return (
    <ul className="flex flex-col gap-2 mt-4 items-center text-secondary-foreground">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm px-4 py-3 w-full"
        >
          <li className="flex gap-2 items-center justify-start">
            <Image
              src={link.imgSrc || ""}
              width={25}
              height={25}
              alt={link.label}
            />
            <span className="text-[17px]">{link.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SocialList;
