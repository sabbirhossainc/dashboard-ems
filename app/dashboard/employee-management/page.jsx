import EmployeeNav from "@/app/ui/dashboard/EmployeeNav/EmployeeNav";
import EmployeeTable from "@/app/ui/dashboard/EmployeeTable/EmployeeTable";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { GoPlus } from "react-icons/go";
import { CiExport } from "react-icons/ci";

const Employee = () => {
  return (

    <div>
      <div className="flex items-center justify-between py-4 gap-8">
        {/* Category title and subtitle */}

        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight capitalize subpixel-antialiased">
            Employees
          </h3>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              Employee contact details and status
            </div>
          </div>
        </div>

        {/* Export button */}
        <button className="flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-icon-bg hover:bg-icon-bg gap-2 cursor-pointer">
          <CiExport className="h-4 w-4" />
          <p className="text-sm">Export List</p>
        </button>

        {/* Add new employee button */}
        <button className="flex items-center rounded-md px-4 py-2 text-sm font-semibold text-gray-50 bg-primary shadow-sm ring-1 ring-inset ring-icon-bg hover:bg-primary-bg hover:text-primary gap-2 cursor-pointer">
          <GoPlus className="h-4 w-4" />
          <p className="text-sm">Add New Employee</p>
        </button>
      </div>
      <EmployeeNav />
      <EmployeeTable />
      <Pagination/>
    </div>
  );
};

export default Employee;