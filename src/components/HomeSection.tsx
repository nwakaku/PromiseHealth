import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center mx-3"
      style={{
        backgroundImage:
          'url("https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_home_01.jpg")',
      }}
    >
      <div className="text-left text-white px-10">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to <br /> Promise HealthCare
        </h1>
        <p className="text-2xl mb-6">Your Trusted Healthcare Partner</p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li className="mb-6 flex items-center">
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
            <p className="text-l">Dedication to Quality Healthcare.</p>
          </li>
          <li className="mb-6 flex items-center">
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
            <p className="text-l">Comprehensive Care.</p>
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
            <p className="text-x">Experience the Promise.</p>
          </li>
        </ul>
      </div>
      <div>
        <select>
            <label>Book an Appointment</label>
            <input>Dr Mike Promise</input>
            <input>Dr John GreatSon</input>
            <input>Prof Uwachi Luke</input>
        </select>
      </div>
    </section>
  );
};

export default HomeSection;
