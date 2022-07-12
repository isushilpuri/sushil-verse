import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

const NavBar = ({ profile }) => {
  return (
    <div className="bg-[#5540af] sticky z-50">
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=" ">
              <Link href="/">
                <h2 className="text-white text-2xl font-bold">
                  {profile.title}
                </h2>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <Link
                    href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <Link
                    href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <Link
                    href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <Link
                    href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <Link
                    href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </Link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div className="block max-h-10 w-20 lg:hidden">
              <Dropdown />
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
