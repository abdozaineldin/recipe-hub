"use client";
import { Suspense, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuBtn from "./MobileMenuBtn";
import ModeBtn from "./ModeBtn";
import NavAction from "./NavAction";
import SearchBar from "./SearchBar";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200
      bg-white/80 backdrop-blur-md dark:bg-zinc-900/70 dark:border-zinc-800"
    >
      <Container>
        <nav className="py-5">
          <div className="hidden sm:flex items-center justify-between gap-4">
            <Logo />

            <div className="w-[30%]">
              <Suspense fallback={null}>
                <SearchBar id="desktop" />
              </Suspense>
            </div>

            <div className="flex gap-4">
              <NavAction />
              <ModeBtn />
            </div>
          </div>

          <div className="flex flex-col sm:hidden">
            <div className="flex items-center justify-between">
              <Logo />

              <div className="flex items-center gap-4">
                <ModeBtn />
                <MobileMenuBtn
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
              </div>
            </div>

            <div className="w-[98%] mx-auto mt-4">
              <Suspense fallback={null}>
                <SearchBar id="mobile" />
              </Suspense>
            </div>

            <AnimatePresence initial={false}>
              {isMenuOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    height: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    opacity: {
                      duration: 0.2,
                    },
                  }}
                  className="overflow-hidden"
                >
                  <MobileMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
