'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
    const pathname = usePathname();
  return (
    <header className="flex w-full justify-between items-center mb-6">
      <img src="assets/logo.svg" alt="" className="h-10 self-start md:hidden" />
      <img src="assets/logo_full.svg" alt="" className="h-10 self-start md:flex hidden" />
      <nav>
        <ul className="hidden md:flex">
          <li>
            <Link
              href="/"
              aria-label="Go to the home page"
              className={`menu-item ${pathname === "/" ? "menu-active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="projects"
              aria-label="See my projects"
              className={`menu-item ${pathname === "/projects" ? "menu-active" : ""}`}
            >
              Projects
            </Link>
          </li>
          
          <li>
            <Link
              href="contact"
              aria-label="Send me a message"
              className={`menu-item ${pathname === "/contact" ? "menu-active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="inline md:hidden text-on-surface-variant cursor-pointer">
          <svg
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.5H21"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 7.5H21"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M2 13.5H21"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="w-screen h-screen bg-primary/95 fixed top-0 right-0 z-50 hidden" id="mobile-menu">
          <div className="close-button">
            <div className="text-white">Close</div>
          </div>

          <ul className="mobile-navigation-container">
            <li>
              <Link
                aria-label="Go to the home page"
                className="mobile-menu-item"
                href="index.html"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                aria-label="See my projects"
                className="mobile-menu-item"
                href="projects"
              >
                Projects
              </Link>
            </li>
            
            <li>
              <Link
                aria-label="Send me a message"
                className="mobile-menu-item"
                href="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
