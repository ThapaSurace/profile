"use client";
import Link from "next/link";
import { navlinks } from "@/constants/navLinks";
import { AnimatedBackground } from "../ui/animated-background";
import Image from "next/image";

const NavList = () => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <AnimatedBackground
        defaultValue={navlinks[0].label}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.3,
        }}
        className="rounded-md border-2"
      >
        {navlinks.map((link) => (
          <Link
            key={link.label}
            data-id={link.label}
            href={link.href}
            className="flex items-center pl-4"
          >
            <div className="flex items-center gap-3 relative h-10">
              {/* <link.icon size={18} /> */}
              <Image
                src={link.imgSrc || ""}
                width={25}
                height={25}
                alt={link.label}
              />
              <span className="text-[17px]">{link.label}</span>
            </div>
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
};

export default NavList;
