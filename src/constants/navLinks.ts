import {
  Braces,
  FileCode,
  BriefcaseBusiness,
  FileStack,
  Mail
} from "lucide-react";

export const navlinks = [
  {
    href: "/",
    label: "Home",
    icon: Braces,
    imgSrc:'/home.png'
  },
  {
    href: "/about",
    label: "About",
    icon: FileCode,
    imgSrc:'/about.png'
  },
  {
    href: "/work",
    label: "Experience",
    icon: FileCode,
    imgSrc:'/work.png'
  },
  {
    href: "/project",
    label: "Project",
    icon: BriefcaseBusiness,
    imgSrc:'/idea.png'
  },
  // {
  //   href: "/blog",
  //   label: "Articles",
  //   icon: FileStack,
  // },
  {
    href: "/contact",
    label: "Contact",
    icon: Mail,
     imgSrc:'/message.png'
  },
];

