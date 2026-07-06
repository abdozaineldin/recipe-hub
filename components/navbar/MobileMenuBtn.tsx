"use client";

import { Menu, X } from "lucide-react";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuBtn = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-20 
    transition-all dark:border-zinc-700 cursor-pointer group-hover:rotate-12"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

export default MobileMenuBtn;
