import React from "react";

const AIDoc = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://documentation.bold-themes.com/cliniq/wp-content/uploads/sites/68/2021/10/hero_home.jpg")',
      }}
      className="bg-grey-300 p-8 flex flex-col md:flex-row justify-between space-x-4 bg-cover bg-center h-full"
    >
      <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label
              htmlFor="patientName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name of Patient:
            </label>
            <input
              type="text"
              id="patientName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter patient's name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="patientAge"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Age Of Patient:
            </label>
            <input
              type="number"
              id="patientAge"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter patient's age"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="medicalDetails"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Medical Details of Patient:
            </label>
            <textarea
              id="medicalDetails"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Enter medical details here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md mt-4 md:mt-0">
        <label
          htmlFor="prediction"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          AI Prediction:
        </label>
        <textarea
          id="prediction"
          className="shadow appearance-none border rounded w-full h-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="AI prediction goes here"
        />
      </div>
    </section>
  );
};

export default AIDoc;
