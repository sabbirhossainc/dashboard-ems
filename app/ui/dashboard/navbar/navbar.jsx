import Boy from "@/public/images/boy.png";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between border-b border-b-icon-bg shadow-sm py-4 gap-8">

      {/* Category title and subtitle */}
      
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Employee Management
        </h3>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            Manage employee accounts,permission,roles and more
          </div>
        </div>
      </div>

      {/* admin panel notification */}

      <div className="p-2 rounded-full hover:bg-icon-bg cursor-pointer">
        <RiNotification2Line />
      </div>

      {/* admin user info */}
      <div className="flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-icon-bg hover:bg-gray-50 lg:mt-0">
        <span className="ml-0">
          <div className="p-1 ring-1 ring-inset ring-icon-bg rounded-full shadow-sm">
            <Image
              src={Boy}
              alt="avatar"
              className="h-8 w-8 bg-icon-bg rounded-full"
            />
          </div>
        </span>

        <span className="ml-3">
          <div className="">
            <p>Sabbir Hossain</p>
            <p className="text-xs text-gray-500">shr472978@gmail.com</p>
          </div>
        </span>

        <span className="ml-3">
          <div className="p-1 hover:bg-icon-bg rounded-full shadow-sm cursor-pointer">
            <IoIosArrowDown />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
