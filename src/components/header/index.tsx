"use client";

import NavItem from "./nav-item";

const Header = () => {
  return (
    <header className="bg-amber-950 text-white flex items-center justify-center">
      <NavItem isSelected>MENU</NavItem>
      <NavItem>ENTRAR</NavItem>
      <NavItem>CONTATO</NavItem>
    </header>
  );
};

export default Header;
