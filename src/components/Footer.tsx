import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 mt-5 py-4 mx-3 px-2">
      <div className="container mx-auto text-center md:flex md:flex-wrap md:justify-between">
        <div className="md:w-1/4 md:text-left md:pr-8 mb-5">
          <small>
            We bring AI years, global experience, and stamina to guide our
            clients through new and often disruptive realities in First Aid
            treatment.
          </small>
        </div>

        <div className="md:w-1/4 md:text-left md:pr-8 mb-5">
          <h2 className="text-xl text-center font-semibold">Services</h2>
          <ul className="text-center list-none pl-4">
            <li>Business Planning</li>
            <li>Feasibility Study</li>
            <li>Startup Funding</li>
            <li>Business Plan Review</li>
            <li>Investor Presentation</li>
          </ul>
        </div>

        <div className="md:w-1/4 md:text-left md:pr-8 mb-5">
          <h2 className="text-xl text-center font-semibold">Pricing & Fees</h2>
          <ul className="text-center list-none pl-4">
            <li>Compare Insurance Plans</li>
            <li>Standard Plan – $499</li>
            <li>Plus Plan – $799</li>
            <li>Premium Plan – $999</li>
            <li>Pro Plan – $1399</li>
          </ul>
        </div>

        <div className="md:w-1/4  md:text-left mb-5">
          <h2 className="text-xl text-center font-semibold">Connect</h2>
          <p className="text-center">1-800-1-900</p>
          <p className="text-center">info@cliniq.com</p>
          <p className="text-center"> Umudike Mouau</p>
        </div>
      </div>

      <div className="mt-4 text-center text-teal-300">
        <p>&copy; 2023 Promise+ All rights reserved.</p>
        <div className="mt-2">
          <a href="#">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
