import { Bars4Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  dictionary: {
    home: string;
    aboutus: string;
    contactus: string;
    pricing: string;
    services: string;
  };
};

export default function NavMenu() {
  console.log();
  const [showMenu, setShowMenu] = useState(false);

  //const dictionary = await getDictionary(lang);
  return (
    <nav className="  border-gray-200 ">
      {showMenu && (
        <div className="w-full border top-14 h-screen z-50 bg-white absolute left-0">
          <ul className="flex flex-col gap-8 justify-center items-center m-4 p-4">
            <li onClick={() => setShowMenu(false)}>
              <Link href="/">خانه</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href="aboutus"> درباره نرم پارس</Link>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <Link href="demo"> درخواست دمو</Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="agents"> درخواست نمایندگی</Link>
            </li>

            <li onClick={() => setShowMenu(false)}>
              <Link href="contact"> تماس با ما </Link>
            </li>
          </ul>
        </div>
      )}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="block cursor-pointer "
        >
          <Bars4Icon className="w-6 h-6 md:hidden"></Bars4Icon>
        </div>

        <div
          className="hidden w-full  md:block md:w-auto"
          id="navbar-multi-level"
        >
          <ul className="  flex flex-col flex-wrap font-medium p-0 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row-reverse md:space-x-0 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4
                dark:text-slate-300
                text-[#004138] rounded
                 hover:dark:bg-slate-800 
                 hover:text-slate-700
                  md:border-0"
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                href="aboutus"
                className="block py-2 pl-3 pr-4
                dark:text-slate-300
                text-[#004138] rounded
                 hover:dark:bg-slate-800 
                 hover:text-slate-700
                  md:border-0"
              >
                درباره نرم پارس آموز
              </Link>
            </li>
            <li>
              <Link
                href="demo"
                className="block py-2 pl-3 pr-4
                dark:text-slate-300
                text-[#004138] rounded
                 hover:dark:bg-slate-800 
                 hover:text-slate-700
                  md:border-0"
              >
                درخواست دمو
              </Link>
            </li>
            <li>
              <Link
                href="agents"
                className="block py-2 pl-3 pr-4
                dark:text-slate-300
                text-[#004138] rounded
                 hover:dark:bg-slate-800 
                 hover:text-slate-700
                  md:border-0"
              >
                درخواست نمایندگی
              </Link>
            </li>

            <li>
              <Link
                href="contact"
                className="block  py-2 pl-3 pr-4
                dark:text-slate-300
                text-[#004138] rounded
                 hover:dark:bg-slate-800 
                 hover:text-slate-700
                  md:border-0"
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
