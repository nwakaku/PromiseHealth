import Link from "next/link";
import Image from "next/image";
import logo from "../components/image/promiselogo.png";

const Nav = () => {
  return (
    <nav className="text-gray-900 ">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image src={logo} width={120} height={120} alt="logo" />
          </Link>
          <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <ul className="font-bold flex space-x-4">
            <li>
              <Link href="/preMed">
                <p className="hover:text-teal-500">About</p>
              </Link>
            </li>
            <li>
              <Link href="/preMed">
                <p className="hover:text-teal-500">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/preMed">
                <p className="hover:text-teal-500">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-blue-900 text-teal-300 px-4 py-4 rounded-md hover:bg-blue-700">
            <Link href="/preMed">
             Online Consultation
            </Link>
           
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
