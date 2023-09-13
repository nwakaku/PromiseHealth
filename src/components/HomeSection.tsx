"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const HomeSection: React.FC = () => {
  const router = useRouter();

  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center mx-3"
      style={{
        backgroundImage:
          'url("https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_home_01.jpg")',
      }}
    >
      <div className="text-left text-white px-5 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
          Welcome to <br /> Promise HealthCare
        </h1>
        <p className="text-xl md:text-2xl mb-4 md:mb-6">
          Your Trusted FirstAID Healthcare Partner
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li className="mb-2 md:mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#02c9b8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mr-2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4 4-4-4" />
            </svg>
            <p className="text-md md:text-lg">
              Dedication to Quality Healthcare.
            </p>
          </li>
          <li className="mb-2 md:mb-6 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#02c9b8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mr-2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4 4-4-4" />
            </svg>
            <p className="text-md md:text-lg">Comprehensive Care.</p>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#02c9b8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="mr-2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12l-4 4-4-4" />
            </svg>
            <p className="text-md md:text-lg">Experience the Promise.</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-start mt-4 md:mt-8 md:pl-10">
        <form className="bg-white p-6 rounded-md w-full md:w-1/2 flex items-center">
          <select
            id="appointment"
            className="text-gray-800 w-full rounded-md py-2 px-3 focus:outline-none border-b-2 border-teal-500 mb-4 md:mb-0 md:mr-4"
          >
            <option value="Dr Mike Promise">Dr Mike Promise</option>
            <option value="Dr John GreatSon">Dr John GreatSon</option>
            <option value="Prof Uwachi Luke">Prof Uwachi Luke</option>
          </select>
          <Link href={"/preMed"}>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
              Make An Appointment
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default HomeSection;
