"use client";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const EmployeeNav = () => {
  const [open, setOpen] = useState("All");

  const toggleTab = (e) => {
    setOpen(e);
  };

  const navigation = [
    { name: "All", href: "#" },
    { name: "Active", href: "#" },
    { name: "Inactive", href: "#" },
  ];

  const activeTab = (type = null) => {
    let classes = "text-gray-400 rounded-md px-4 py-0.5 text-sm font-medium";

    if (type === open) {
      classes += " bg-gray-100 text-gray-900";
    } else {
      classes += "";
    }
    return classes;
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b border-b-icon-bg shadow-sm py-6 gap-4">
        {/* Employee navbar */}
        <div className="flex justify-center items-center bg-gray-200 shadow-sm rounded-lg">
          <div className="mx-10 my-1.5 flex items-baseline space-x-4">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <button
                  className={activeTab(`${item.name}`)}
                  aria-current={open ? "page" : undefined}
                  onClick={() => toggleTab(`${item.name}`)}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Category title and subtitle */}
        <span className="ml-auto"></span>

        {/* Search bar */}
        <div className="relative rounded-md text-sm shadow-sm">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
            <CiSearch className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-96 rounded-md border-0 py-2 pl-8 pr-2 text-gray-900 ring-1 ring-inset ring-icon-bg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary outline-0"
            placeholder="Name,Department,Status..."
          />
        </div>

        {/* Entries button */}
        <div className="relative rounded-md text-sm shadow-sm">
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <IoIosArrowDown className="h-4 w-4 text-gray-500" />
          </span>
          <select
            id="entries"
            name="entries"
            className="block w-full rounded-md border-0 appearance-none border-transparent bg-transparent py-2 pr-6 px-3 text-sm text-gray-500 font-semibold focus:ring-2  focus:ring-indigo-600 ring-1 ring-inset ring-icon-bg outline-0 "
          >
            <option className="bg-icon-bg text-gray-900 font-medium">
              10 Entries
            </option>
            <option className="bg-icon-bg text-gray-900 font-medium">
              20 Entries
            </option>
            <option className="bg-icon-bg text-gray-900 font-medium">
              30 Entries
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmployeeNav;
