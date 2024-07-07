"use client";

import NavItem from "./nav-item";

const Header = () => {
  return (
    <header className="bg-amber-950 text-white">
      <nav className="flex items-center justify-center">
        <NavItem href="/">MENU</NavItem>
        <NavItem href="/login">ENTRAR</NavItem>
        <NavItem href="/contact">CONTATO</NavItem>
      </nav>
    </header>
  );
};

export default Header;
