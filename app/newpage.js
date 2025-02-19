"use client";  

import React, { useState } from "react";

const UseStateHook = () => {
  const [name] = useState('Taylor'); 
  const [friendName] = useState('Chinguun'); 
  const [showName, setShowName] = useState(false); 
  const [showFriendName, setShowFriendName] = useState(false); 

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full ">
      <button 
        className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-semibold mb-4 transition-all duration-300 ease-in-out hover:bg-blue-600"
        onClick={() => setShowName(!showName)}
      >
        {showName ? 'Hide Name' : 'Show Name'}
      </button>
      {showName && <p className="text-xl font-bold text-gray-700">{name}</p>}
cd
      <button 
        className="bg-red-500 text-white py-2 px-6 rounded-lg text-lg font-semibold mt-4 transition-all duration-300 ease-in-out hover:bg-red-600"
        onClick={() => setShowFriendName(!showFriendName)}
      >
        {showFriendName ? 'Hide Friend Name' : 'Show Friend Name'}
      </button>

      {showFriendName && <p className="text-xl font-bold text-gray-700">{friendName}</p>}
    </div>
  );
};

export default UseStateHook;


