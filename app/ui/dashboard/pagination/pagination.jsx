import Link from "next/link";
import { IoChevronBack, IoChevronForwardOutline } from "react-icons/io5";

const Pagination = () => {
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
            <Link href={"#"}>
              <button className="relative inline-flex items-center px-2 py-2 text-gray-400  hover:text-primary rounded-md">
                <span className="sr-only">Previous</span>
                <IoChevronBack className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-primary px-2 py-1 text-sm font-semibold text-white rounded-md">
                1
              </button>
            </Link>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-transparent hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md">
                2
              </button>
            </Link>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-transparent  hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md">
                3
              </button>
            </Link>

            <span className="relative inline-flex items-center px-2 py-1 text-sm font-semibold text-gray-700">
              ...
            </span>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-transparent hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md">
                8
              </button>
            </Link>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-transparent hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md">
                9
              </button>
            </Link>
            <Link href={"#"}>
              <button className="relative z-10 inline-flex items-center bg-transparent hover:text-primary hover:bg-primary-bg px-2 py-1 text-sm font-semibold text-gray-700 rounded-md">
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
