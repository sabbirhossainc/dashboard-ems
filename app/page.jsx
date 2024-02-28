import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-primary-bg">
      <div className="flex flex-col items-center gap-6 border rounded-xl p-12 shadow-md">
        <p className="text-5xl font-light">Home Page</p>
        <Link href={"/dashboard"}>
          <div className="flex items-center gap-4">
            <p className="text-6xl font-light text-primary">Go to Dashboard </p>
            <GoArrowRight className="text-primary w-12 h-12" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
