import data from "@/app/utils/data.json";
import Image from "next/image";
import { GoCircle } from "react-icons/go";
import { MdCircle } from "react-icons/md";

const EmployeeTable = () => {
  const tHead = [
    { name: "Employee Name", style: " basis-3/6 w-96", id: "1" },
    { name: "Designation", style: " basis-1/6 w-auto", id: "2" },
    { name: "Department", style: " basis-1/6 w-auto", id: "3" },
    { name: "Account Status", style: " basis-1/6 w-auto", id: "4" },
    { name: "Platform Status", style: " basis-1/6 w-auto", id: "5" },
  ];

  return (
    <div>
      {/* Employee Table heading */}
      <div className="flex items-start bg-gray-200 shadow-sm rounded-lg mb-3">
        <div className="flex flex-row items-center gap-6 w-full">
          <div className="items-center pl-4 pr-0">
            <GoCircle className="h-3 w-3" />
          </div>
          {tHead.map((item, id) => (
            <div className={`${item.style}`} key={id}>
              <div className="text-gray-400 rounded-md py-2 text-md font-semibold">
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employee Table data */}

      {data ? (
        <div className="pb-8">
          {data.data.map((item, id) => (
            <div
              className="flex items-start border-b border-b-icon-bg shadow-sm"
              key={id}
            >
              <div className="flex flex-row items-center gap-1 w-full py-0">
                <span className="">
                  <div className="p-1 hover:bg-icon-bg rounded-full shadow-sm cursor-pointer">
                    <GoCircle className="h-3 w-3" />
                  </div>
                </span>
                <div className="flex items-center rounded-md px-0 py-2 text-sm font-semibold text-gray-900 basis-3/6 w-96">
                  <span className="">
                    <div className="p-1 ring-1 ring-inset ring-icon-bg rounded-full shadow-sm">
                      <Image
                        src={`/public/images/${item.avatar}.png`}
                        alt={item.avatar}
                        className="h-8 w-8 bg-icon-bg rounded-full"
                        width={16}
                        height={16}
                      />
                    </div>
                  </span>

                  <span className="ml-3">
                    <div className="">
                      <p>{item.name}</p>
                      <p className="text-xs text-gray-400">{item.email}</p>
                    </div>
                  </span>
                </div>
                <div className="text-sm font-normal basis-1/6 w-auto pl-1">
                  <p className="text-gray-900 font-medium">{item.title}</p>
                </div>
                <div className="text-sm font-normal basis-1/6 w-auto pl-2">
                  <p className="text-gray-900 font-medium">{item.dept}</p>
                </div>
                <div className="text-sm font-normal basis-1/6 w-auto pl-3">
                  <p className="text-gray-900 font-medium">{item.astatus}</p>
                </div>
                <div className=" basis-1/6 w-full pl-4">
                  <div className="inline-flex w-auto">
                    {item.invited ? (
                      <span className="flex items-center bg-indigo-200 rounded-md p-1 pr-2">
                        <MdCircle className="h-6 w-6 px-1 text-indigo-700" />
                        <p className="flex items-center text-sm font-semibold text-indigo-700  ">
                          Invited
                        </p>
                      </span>
                    ) : (
                      <span className="flex items-center bg-green-200 rounded-md p-1 pr-2">
                        <MdCircle className="h-6 w-6 px-1 text-green-700" />
                        <p className="flex items-center text-sm font-semibold text-green-700  ">
                          Accepted
                        </p>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-red-500 text-xl">Data not found!</div>
      )}
    </div>
  );
};

export default EmployeeTable;
