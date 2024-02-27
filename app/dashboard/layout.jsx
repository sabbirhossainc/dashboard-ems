import Navbar from "@/app/ui/dashboard/navbar/navbar";
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/6 p-4 border-r border-r-icon-bg">
        <Sidebar />
      </div>
      <div className="basis-5/6 p-6">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
