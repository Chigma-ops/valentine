"use client";  

import React, { useState } from "react";

const UseStateHook = () => {
  const [name] = useState('Taylor'); 
  const [friendName] = useState('Chinguun'); 
  const [showName, setShowName] = useState(false); 
  const [showFriendName, setShowFriendName] = useState(false); 

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-100">
      <button 
        onClick={() => setShowName(prevShowName => !prevShowName)} 
        className="bg-indigo-500 text-white font-bold py-2 px-4 rounded shadow-xl transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 mb-4"
      >
        Sigma sigma
      </button>


      {showName && <p className="mt-4 text-xl text-black">{name}</p>}
      <button 
        onClick={() => setShowFriendName(prevShowFriendName => !prevShowFriendName)} 
        className="bg-green-500 text-white font-bold py-2 px-4 rounded shadow-xl transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 mt-4"
      >
        Toggle Friend Name
      </button>

      {showFriendName && <p className="mt-4 text-xl text-black">{friendName}</p>}
    </div>
  );
};

export default UseStateHook;

