'use client'
import Link from "next/link"
import {navlinks} from "@/constants/navLinks"
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

const NavList = () => {
    const pathname = usePathname()
  return (
    <ul className="flex flex-col gap-2 text-sm">
    {navlinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={twMerge(
          pathname === link.href &&
            "transition duration-200  bg-background rounded-md border-2 font-semibold",
          "px-4 py-3 text-secondary-foreground"
        )}
      >
        <li className="flex gap-2 items-center text-secondary-foreground">
          <link.icon size={20} />
          <span>{link.label}</span>
        </li>
      </Link>
    ))}
  </ul>
  )
}

export default NavList