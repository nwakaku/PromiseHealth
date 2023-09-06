import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="text-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className=" text-3xl font-bold cursor-pointer text-[#02c9b8] ">
            Promise +
          </p>
        </Link>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <p className=" hover:text-gray-300">About</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className=" hover:text-gray-300">Services</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className=" hover:text-gray-300">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm">Contact Us On:<br/> +234 7083519662</p>
          <button className="bg-blue-600 text-white  px-4 py-2 rounded-full hover:bg-blue-700">
            Online Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
