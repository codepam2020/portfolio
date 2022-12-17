import React, { useEffect, useState } from "react";

export default function Main () {

  const [careerVisible, setCareerVisible] = useState<boolean>();

  function interSectionCareer () {
    const observation = IntersectionObserver;
  }

  return (
    <div className="flex flex-col items-center justify-start w-full p-3 py-5 min-h-screen">
      <div className="flex flex-col items-center justify-start w-full my-10">
        <a className="animate-cchange font-bold text-6xl" href="#" >
          CODEPAM Portfolio
        </a>
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="relative top-2 w10 h-6 text-white bg bg-mgb px-3 py-1" >Career</div>
        <div className="w-3/4 min-h-60 border-gray-400 border p-6 text-white">
        </div>
      </div>
    </div>
  );
}