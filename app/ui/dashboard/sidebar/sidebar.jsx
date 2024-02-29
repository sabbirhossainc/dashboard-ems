"use client";
import Logo from "@/public/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LiaFileVideo, LiaStopCircle } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineTimeline } from "react-icons/md";
import { RiHome3Line, RiShoppingCartLine } from "react-icons/ri";

const Sidebar = () => {
  const pathname = usePathname();

  const data = [
    {
      id: "1",
      icon: <RiHome3Line className="h-5 w-5"/>,
      title: "Home",
      href: "/dashboard",
    },
    {
      id: "2",
      icon: <MdOutlineTimeline className="h-5 w-5"/>,
      title: "Timeline",
      href: "/dashboard/timeline",
    },
    {
      id: "3",
      icon: <LiaStopCircle className="rotate-45 h-5 w-5" />,
      title: "Appreciate Peers",
      href: "/dashboard/appreciate-peers",
    },
    {
      id: "4",
      icon: <RiShoppingCartLine className="h-5 w-5"/>,
      title: "Redeem Rewards",
      href: "/dashboard/redeem-rewards",
    },
    {
      id: "5",
      icon: <LuUsers2 className="h-5 w-5"/>,
      title: "Employee Management",
      href: "/dashboard/employee-management",
    },
    {
      id: "6",
      icon: <HiOutlineWrenchScrewdriver className="h-5 w-5"/>,
      title: "Configuration",
      href: "/dashboard/configuration",
    },
    {
      id: "7",
      icon: <LiaFileVideo className="h-5 w-5"/>,
      title: "Training & Resources",
      href: "/dashboard/training&resources",
    },
  ];

  return (
    <div className="container">
      {/* Slide bar tabs */}

      <div className="flex h-24 py-4 border-b border-b-icon-bg shadow-sm items-center gap-2">
        <Link href={"/"}>
          <div className="border p-2 border-icon-bg rounded-full shadow-sm">
            <Image src={Logo} alt="logo" className="h-10 w-10 p-1" />
          </div>
        </Link>
        <div className="w-auto">
          <p className="text-xl font-medium">Softypy</p>
          <p className="text-sm text-gray-400">Digital Creator</p>
        </div>
      </div>

      {/*  Mapping Slide bar tabs data */}

      <div className="flex flex-col mt-12 px-2 gap-2">
        {data.map((item) => (
          <div key={item.id}>
            <Link href={item.href}>
              <div
                className={`flex items-center text-sm text-gray-500 py-2 px-3 gap-2 hover:bg-gray-200 rounded-lg w-full
            ${
              pathname === `${item.href}` &&
              "text-primary font-semibold bg-primary-bg hover:bg-primary-bg"
            }`}
              >
                {item.icon}
                <p>{item.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
