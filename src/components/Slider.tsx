import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuRightAlt } from "react-icons/cg";
import Header from "@/components/sidebar/Header";
import NavList from "@/components/sidebar/NavList";
import SocialList from "@/components/sidebar/SocialList";
import Link from "next/link";
import { navlinks } from "@/constants/navLinks";
import Image from "next/image";
import { Separator } from "./ui/separator";

const Slider = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuRightAlt className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10" />
      </SheetTrigger>
      <SheetContent side="left" className="space-y-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <Header />
        </SheetHeader>

        {navlinks.map((link) => (
          <SheetClose key={link.label} asChild>
            <Link
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
          </SheetClose>
        ))}

        <Separator />

        <SocialList />
      </SheetContent>
    </Sheet>
  );
};

export default Slider;
