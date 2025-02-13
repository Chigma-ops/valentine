"use client";  

import React, { useState } from "react";

const UseStateHook = () => {
  const [name] = useState('Taylor'); 
  const [friendName] = useState('Chinguun'); 
  const [showName, setShowName] = useState(false); 
  const [showFriendName, setShowFriendName] = useState(false); 

  return (
    <div>
      <button onClick={() => setShowName(!showName)}>
        {showName ? 'Hide Name' : 'Show Name'}
      </button>
      
      {showName && <p>{name}</p>}

      <button onClick={() => setShowFriendName(!showFriendName)}>
        {showFriendName ? 'Hide Friend Name' : 'Show Friend Name'}
      </button>
      
      {showFriendName && <p>{friendName}</p>}
    </div>
  );
};

export default UseStateHook;

