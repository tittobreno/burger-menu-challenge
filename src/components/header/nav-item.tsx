import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  href: string;
}

const NavItem = ({ children, href }: NavItemProps) => {
  const pathname = usePathname();

  const isSelected = () => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href) && pathname !== "/";
  };

  return (
    <Link
      href={href}
      className={`cursor-pointer py-[14px] px-14 border-b-4 ${
        isSelected() ? "border-white border-opacity-100" : "border-transparent"
      } hover:border-white hover:border-opacity-100`}
    >
      {children}
    </Link>
  );
};

export default NavItem;
