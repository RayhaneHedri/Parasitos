// app/components/Header.js

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 p-4">
      <div className="mr-4 ml-20">
        <Image src="/assets/menu.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/assets/logo website-01.png" alt="Logo" width={160} height={80} />
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
        <Link href="/about" className="ml-8 link1">
          Subscribe
        </Link>
      </nav>
    </header>
  );
};

export default Header;
