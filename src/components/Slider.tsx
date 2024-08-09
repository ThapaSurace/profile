import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuRightAlt } from "react-icons/cg";
import Header from '@/components/sidebar/Header'
import NavList from "@/components/sidebar/NavList";
import SocialList from "@/components/sidebar/SocialList";

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
         <NavList />
         <SocialList />
      </SheetContent>
    </Sheet>
  );
};

export default Slider;
