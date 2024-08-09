import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";

const SocialList = () => {
  return (
    <div className="mt-6">
          <h3 className="font-semibold">Socials</h3>
          <ul className="flex flex-col gap-2 mt-4 text-secondary-foreground">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm px-4 py-3"
              >
                <li className="flex gap-2 items-center">
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
  )
}

export default SocialList