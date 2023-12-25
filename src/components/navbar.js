import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { PiLinkSimpleFill } from "react-icons/pi";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className=" fixed bottom-0 md:bottom-auto md:top-[33%] z-50  flex w-full justify-around border-2 md:border-l-0 border-b-0 md:border-b-2 border-blue-600 md:w-fit md:flex-col gap-5 p-3 bg-slate-950 rounded-md rounded-b-none md:rounded-b-md md:rounded-l-none">
      <Link
        href="/"
        className="  hover:text-blue-600 text-slate-300 flex flex-col justify-center items-center"
      >
        <p className=" text-2xl ">
          <AiFillHome />
        </p>
        <p className=" text-sm ">Home</p>
      </Link>
      <Link
        href="/links"
        className="  hover:text-blue-600 text-slate-300 flex flex-col justify-center items-center"
      >
        <p className=" text-2xl ">
          <PiLinkSimpleFill />
        </p>
        <p className=" text-sm ">My links</p>
      </Link>

      <Link
        href="/track"
        className="  hover:text-blue-600 text-slate-300 flex flex-col justify-center items-center"
      >
        <p className=" text-2xl ">
          <IoSearchCircle />
        </p>
        <p className=" text-sm ">Track</p>
      </Link>
      <Link
        href="/help"
        className="  hover:text-blue-600 text-slate-300 flex flex-col justify-center items-center"
      >
        <p className=" text-2xl ">
          <BiSolidHelpCircle />
        </p>
        <p className=" text-sm ">Help</p>
      </Link>
    </div>
  );
};

export default Navbar;
