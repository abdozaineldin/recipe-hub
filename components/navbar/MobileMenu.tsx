"use client";
import { AnimatePresence, motion } from "motion/react";
import FavoritesBtn from "./FavoritesBtn";
import HomeBtn from "./HomeBtn";

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <div
      className={`overflow-hidden mt-4 transition-all duration-300 flex flex-col gap-2
      ${isMenuOpen ? "max-h-52 opacity-100" : "hidden opacity-0"}`}
    >
      <div className="border-b" onClick={() => setIsMenuOpen(false)}>
        <HomeBtn className="border-0 bg-transparent dark:bg-transparent justify-start w-full mb-2" />
      </div>

      <div onClick={() => setIsMenuOpen(false)}>
        <FavoritesBtn className="border-0 bg-transparent dark:bg-transparent justify-start w-full" />
      </div>
    </div>
  );
};

export default MobileMenu;
