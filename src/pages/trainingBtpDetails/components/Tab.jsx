import React from "react";

const Tab = ({ toggleResults, setToggleResults }) => {
  return (
    <div className="flex flex-row h-12 border-b border-[#E0E0E0] box-border gap-2 text-base font-medium max-w-full overflow-x-auto scrollbar-hide">
      {/* Description Tab */}
      <a
        href="#description"
        className={`${
          toggleResults === "Description"
            ? "text-primary bg-white border-b-2 border-primary"
            : "text-gray-600 bg-[#FAFAFA] border-b-2 border-transparent hover:bg-[#f4f4f4] hover:text-primary"
        } flex items-center justify-center px-6 py-2 rounded-t-sm h-12 transition-all duration-300`}
        onClick={() => setToggleResults("Description")}
      >
        Description
      </a>

      {/* Skills Tab */}
      <a
        href="#skills"
        className={`${
          toggleResults === "Compétences développées"
            ? "text-primary bg-white border-b-2 border-primary"
            : "text-gray-600 bg-[#FAFAFA] border-b-2 border-transparent hover:bg-[#f4f4f4] hover:text-primary"
        } flex items-center justify-center px-6 py-2 rounded-t-sm h-12 transition-all duration-300`}
        onClick={() => setToggleResults("Compétences développées")}
      >
        Compétences développées
      </a>

      {/* Programs Tab */}
      <a
        href="#program"
        className={`${
          toggleResults === "Programmes"
            ? "text-primary bg-white border-b-2 border-primary"
            : "text-gray-600 bg-[#FAFAFA] border-b-2 border-transparent hover:bg-[#f4f4f4] hover:text-primary"
        } flex items-center justify-center px-6 py-2 rounded-t-sm h-12 transition-all duration-300`}
        onClick={() => setToggleResults("Programmes")}
      >
        Programmes
      </a>

      {/* Funding Tab */}
      <a
        href="#aids"
        className={`${
          toggleResults === "Financements"
            ? "text-primary bg-white border-b-2 border-primary"
            : "text-gray-600 bg-[#FAFAFA] border-b-2 border-transparent hover:bg-[#f4f4f4] hover:text-primary"
        } flex items-center justify-center px-6 py-2 rounded-t-sm h-12 transition-all duration-300`}
        onClick={() => setToggleResults("Financements")}
      >
        Financements
      </a>

      {/* Testimonials Tab */}
      <a
        href="#testimonials"
        className={`${
          toggleResults === "Témoignages"
            ? "text-primary bg-white border-b-2 border-primary"
            : "text-gray-600 bg-[#FAFAFA] border-b-2 border-transparent hover:bg-[#f4f4f4] hover:text-primary"
        } flex items-center justify-center px-6 py-2 rounded-t-sm h-12 transition-all duration-300`}
        onClick={() => setToggleResults("Témoignages")}
      >
        Témoignages
      </a>
    </div>
  );
};

export default Tab;
