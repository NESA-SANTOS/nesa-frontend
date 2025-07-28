import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const EducationAward = () => {
  return (
    <div className="education-award bg-[url('/images/Herosection.png')] bg-cover bg-center pt-24 md:pt-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center min-h-[500px] md:min-h-[700px]">
      <div className="content max-w-full md:max-w-2xl mb-6 md:mb-0 md:pr-8 text-center md:text-left">
        <h1 
          className="text-3xl md:text-4xl font-bold mb-4" 
          style={{ 
            background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          New Education Standard Award: The Award Categories
        </h1>
        <p className="text-lg md:text-xl text-white">
          These are the 15 main categories to nominate your champions from, within them are subcategories showing levels of recognition.
        </p>
      </div>
      <div className="logo flex-shrink-0 w-64 h-64 md:w-96 md:h-96 md:-ml-64">
        <Image 
          src="/images/leftlogo.png" 
          alt="NESA Logo" 
          width={256} // Set width
          height={256} // Set height
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default EducationAward;
