import React from "react";

const Advisors = ({ label, description, advisorsList }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800">{label}</h2>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Advisors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {advisorsList.map((item) => (
            <div
              key={item.name}
              className="bg-gray-100 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col items-center justify-center gap-6">
                {/* Image Container */}
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
                <p className="text-gray-600 text-sm mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
