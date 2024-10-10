// app/components/Header.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4">
      <div className="mr-4 ml-20" onClick={toggleMenu}>
        <Image src="/assets/menu.png" alt="Logo" width={50} height={50} />
      </div>
      {isOpen && (
        <div className="absolute top-12 ml-36 w-64 bg-gray-100 shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="aboutUs" className="text-gray-800">
                About Us
              </a>
            </li>
            <li>
              <a href="profile" className="text-gray-800">
                Profile
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <a href="/">
          <Image
            src="/assets/logo website-01.png"
            alt="Logo"
            width={160}
            height={80}
          />
        </a>
      </div>
      <nav className="flex items-center mr-20">
        <div className="flex items-center border-2 border-black rounded-lg overflow-hidden w-40 max-w-sm">
          <input
            type="search"
            className="w-full px-4 py-2 text-black outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span className="px-4 bg-gray-100 cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
          </span>
        </div>

        {/* Remove the <a> tag inside the Link components */}
        <Link href="/signin" className="ml-8 link1">
          Sign in
        </Link>
        <Link href="/subscription" className="ml-8 link1">
          Subscribe
        </Link>
      </nav>
    </header>
  );
};

export default Header;
