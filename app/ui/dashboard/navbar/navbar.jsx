"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";

const Navbar = () => {
  const pathName = usePathname();
  const pathTitle = pathName.split("/").pop().replace("-", " ");
  const titleName = pathTitle.replace("&", " & ");

  return (
    <div className="flex items-center justify-between border-b border-b-icon-bg shadow-sm py-4 gap-8">
      {/* Category title and subtitle */}

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight capitalize subpixel-antialiased">
          {titleName}
        </h3>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            Manage employee accounts,permission,roles and more
          </div>
        </div>
      </div>

      {/* admin panel notification */}

      <div className="p-2 rounded-full ring-1 ring-inset ring-icon-bg hover:bg-icon-bg hover:text-primary cursor-pointer">
        <RiNotification2Line />
      </div>

      {/* admin user info */}
      <div className="flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-icon-bg hover:bg-gray-50">
        <span className="ml-0">
          <div className="flex p-1 ring-1 ring-inset ring-icon-bg rounded-full shadow-sm">
            <Image
              src={"/images/man.png"}
              alt="avatar"
              className="h-8 w-8 bg-icon-bg rounded-full"
              width={200}
              height={200}
            />
          </div>
        </span>

        <span className="ml-3">
          <div className="">
            <p>Md Sabbir Hossain</p>
            <p className="text-xs text-gray-500">shr472978@gmail.com</p>
          </div>
        </span>

        <span className="ml-3">
          <div className="shadow-sm hover:text-primary cursor-pointer">
            <IoIosArrowDown />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
