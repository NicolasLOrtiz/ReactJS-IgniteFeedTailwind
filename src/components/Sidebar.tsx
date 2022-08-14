import React from "react";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export const Sidebar: React.FC = () => (
  <aside className="bg-gray-800 rounded-md overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1638913972776-873fc7af3fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      alt="Background"
      className="h-16 w-full object-cover"
    />

    <div className="flex flex-col items-center justify-center -mt-8">
      <Avatar size="sm" src="https://github.com/NicolasLOrtiz.png" />

      <strong className="mt-4 text-gray-100 leading-6">
        Nícolas Lopes Ortiz
      </strong>
      <span className="text-sm">Web Developer</span>
    </div>

    <footer className="border-t border-gray-600 mt-6 p-6">
      <a
        href="#"
        className="w-full bg-transparent border text-brand-500 border-brand-500 rounded-md h-[50px] py-0 px-6 font-bold flex items-center justify-center gap-2 hover:bg-brand-500 hover:text-white transition-colors duration-200 ease-in-out"
      >
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
);
