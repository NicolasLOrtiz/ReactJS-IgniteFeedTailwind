import React from "react";

import igniteLogo from "../assets/ignite-logo.svg";

export const Header: React.FC = () => (
  <header className="w-full bg-gray-800 text-white h-20 flex justify-center py-6 px-0 gap-2 items-center">
    <img src={igniteLogo} alt="Ignite Logo" className="h-8" />
    <strong>Ignite Feed</strong>
  </header>
);
