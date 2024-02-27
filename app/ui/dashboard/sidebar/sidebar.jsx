"use client";
import Logo from "@/public/icons/logo.svg";
import { MdOutlineTimeline } from "react-icons/md";
import { RiHome3Line, RiShoppingCartLine } from "react-icons/ri";
import { LiaStopCircle } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LiaFileVideo } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname();

  const data = [
    {
      id: "1",
      icon: <RiHome3Line />,
      title: "Home",
      href: "/dashboard",
    },
    {
      id: "2",
      icon:<MdOutlineTimeline />,
      title: "Timeline",
      href: "/dashboard/timeline",
    },
    {
      id: "3",
      icon: <LiaStopCircle className="rotate-45"/>,
      title: "Appreciate Peers",
      href: "/dashboard/appreciate-peers",
    },
    {
      id: "4",
      icon: <RiShoppingCartLine />,
      title: "Redeem Rewards",
      href: "/dashboard/redeem-rewards",
    },
    {
      id: "5",
      icon: <LuUsers2 />,
      title: "Employee Management",
      href: "/dashboard/employee-management",
    },
    {
      id: "6",
      icon: <HiOutlineWrenchScrewdriver />,
      title: "Configuration",
      href: "/dashboard/configuration",
    },
    {
      id: "7",
      icon: <LiaFileVideo />,
      title: "Training & Resources",
      href: "/dashboard/training&resources",
    },
  ];

  return (
    <div className="container">
      {/* Slide bar tabs */}

      <div className="flex h-24 py-4 border-b border-b-icon-bg items-center gap-2">
        <div className="border p-2 border-icon-bg rounded-full">
          <Image src={Logo} alt="logo" className="h-10 w-10 p-1" />
        </div>
        <div className="w-auto">
          <p className="text-xl font-medium">Company</p>
          <p className="text-sm text-gray-400">Company subtitle</p>
        </div>
      </div>

      {/* Slide bar tabs */}

      <div className="flex flex-col mt-12 px-2 gap-2">

        {/* Mapping tabs data*/}
{data.map((item) =>(
<div key={item.id}>

        <Link href={item.href}>
          <div
            className={`flex items-center text-sm text-gray-500 py-2 px-3 gap-2 hover:bg-gray-200 rounded-lg w-full
            ${
              pathname === `${item.href}` &&
              "text-primary bg-primary-bg hover:bg-primary-bg"
            }`}
          >
            {item.icon}
            <p>{item.title}</p>
          </div>
        </Link>
</div>

)


)}

      </div>
    </div>
  );
};

export default Sidebar;
