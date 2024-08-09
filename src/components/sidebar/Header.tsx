import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex gap-2 items-center mb-6">
      <div className="relative w-16 h-16">
        <Avatar>
          <AvatarImage src="/profile.jpg" />
          <AvatarFallback>profile</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Suresh Thapa</span>
        <span className="text-secondary-foreground font-light">Developer</span>
      </div>
    </div>
  );
};

export default Header;
