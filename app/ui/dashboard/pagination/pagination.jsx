"use client";
import Link from "next/link";
import { useState } from "react";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = () => {
  const [open, setOpen] = useState("1");

  const toggleTab = (e) => {
    setOpen(e);
  };

  const activeTab = (type = null) => {
    let classes =
      "relative z-10 inline-flex items-center hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md";

    if (type === open) {
      classes += " bg-primary text-white hover:bg-primary hover:text-white";
    } else {
      classes += "";
    }
    return classes;
  };

  return (
    <div>
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="inline-flex items-center rounded-md gap-1"
            aria-label="Pagination"
          >
            <Link href={"#previous"}>
              <button className="relative inline-flex items-center px-2 py-2 text-gray-400  hover:text-primary rounded-md">
                <span className="sr-only">Previous</span>
                <IoChevronBack className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            <Link href={"#1"}>
              <button
                className={activeTab("1")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("1")}
              >
                1
              </button>
            </Link>
            <Link href={"#2"}>
              <button
                className={activeTab("2")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("2")}
              >
                2
              </button>
            </Link>
            <Link href={"#3"}>
              <button
                className={activeTab("3")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("3")}
              >
                3
              </button>
            </Link>

            <span className="relative inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-700">
              ...
            </span>
            <Link href={"#8"}>
              <button
                className={activeTab("8")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("8")}
              >
                8
              </button>
            </Link>
            <Link href={"#9"}>
              <button
                className={activeTab("9")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("9")}
              >
                9
              </button>
            </Link>
            <Link href={"#10"}>
              <button
                className={activeTab("10")}
                aria-current={open ? "page" : undefined}
                onClick={() => toggleTab("10")}
              >
                10
              </button>
            </Link>

            <Link href={"#"}>
              <button className="relative inline-flex items-center px-2 py-2 text-gray-400  hover:text-primary rounded-md">
                <span className="sr-only">Next</span>
                <IoChevronForwardOutline
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
