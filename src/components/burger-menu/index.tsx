import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex z-50">
      <button onClick={toggleSidebar} className="text-white rounded ">
        <Menu />
      </button>

      <div
        className={`z-20 fixed top-0 right-0 w-64 h-full bg-orange-950 text-white transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <X />
          </button>
        </div>
        <div className="p-4 flex flex-col items-center justify-center">
          <span>MENU</span>
          <span>ENTRAR</span>
          <span>CONTATO</span>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
