"use client";

import { Menu } from "lucide-react";

import NavItem from "./nav-item";
import Sidebar from "../burger-menu";

const Header = () => {
  return (
    <header className="bg-amber-950 text-white">
      <nav className=" items-center justify-center hidden sm:flex">
        <NavItem href="/">MENU</NavItem>
        <NavItem href="/login">ENTRAR</NavItem>
        <NavItem href="/contact">CONTATO</NavItem>
      </nav>
      <section className="sm:hidden flex items-center justify-between py-[14px] px-[10px]">
        <div></div>
        <span>Menu</span>
        <Sidebar />
      </section>
    </header>
  );
};

export default Header;
