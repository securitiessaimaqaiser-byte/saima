import React from 'react';

const members = [
  {
    name: "Haider Ali",
    role: "Wordpress Front End Developer",
    contactLink: "#"
  },
  {
    name: "Haider Ali",
    role: "Wordpress Front End Developer",
    contactLink: "#"
  },
  {
    name: "Haider Ali",
    role: "Wordpress Front End Developer",
    contactLink: "#"
  },
  {
    name: "Board Of Directors",
    role: "Afzal Hussain",
    contactLink: "#",
    isAfzal: true
  }
];

const BoardOfDirectors = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-green-800 font-serif border-b inline-block pb-2 border-green-200">
          Board Of Directors
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Placeholder Image Card */}
            <div className="bg-black w-full aspect-square flex items-center justify-center mb-4">
              <div className="text-white text-9xl font-serif">?</div>
              {/* Small diamond shape at bottom of Q mark */}
              <div className="absolute mt-20 w-4 h-4 bg-white rotate-45 transform translate-y-10"></div>
            </div>
            
            <div className="text-center w-full">
              <h3 className="text-xl text-green-800 font-medium">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{member.role}</p>
              
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded transition-colors uppercase text-sm">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;