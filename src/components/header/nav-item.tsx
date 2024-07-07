import React, { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  isSelected?: boolean;
}

const NavItem = ({ children, isSelected }: NavItemProps) => {
  return (
    <span
      className={`cursor-pointer py-[14px] px-14 border-b-4 ${
        isSelected ? "border-white border-opacity-100" : "border-transparent"
      } hover:border-white hover:border-opacity-100`}
    >
      {children}
    </span>
  );
};

export default NavItem;
