"use client";

import { navlinks } from "@/constants/navLinks";
import { socialLinks } from "@/constants/socialLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -220 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className="py-8 px-10 hidden md:block"
      >
        <div className="flex gap-2 items-center mb-6">
          <div className="relative w-16 h-16">
            <Image
              src="/profile.jpg"
              fill
              className="rounded-full ring-slate-500 ring-2"
              alt="profile"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Suresh Thapa</span>
            <span className="text-secondary-foreground font-light">Developer</span>
          </div>
        </div>

        {/* navlinks */}

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

        {/* social media */}
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
      </motion.div>
    </AnimatePresence>
  );
};
