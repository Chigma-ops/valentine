"use client";  

import React, { useState } from "react";
const UseStateHook = () => {
    const [color, setColor] = useState(" ");
    return (
        <div className={`flex  space-x-4 w-full h-screen bg-${color}-800`}>
            <p>Change color:</p>
            <button className="border bg-red-800 py-4 px-6" onClick={() => {
                setColor("red")
            }}>
             Red
            </button>
            <button className="border bg-blue-800 py-4 px-6" onClick={() => {
                setColor("blue")
            }}>
             Blue
            </button>
            <button className="border bg-green-800 py-4 px-6" onClick={() => {
                setColor("green")
            }}>
             Green
            </button>
            <button className="border bg-white py-4 px-6" onClick={() => {
                setColor(" ")
            }}>
             return
            </button>
            {color == "red"
              ? "123"
              : color == "blue"
              ? "456"
              : color == "green" 
              ? "789"
              : color == ""
              ? "1000"
              : "000"
            }
            
        </div>
    
  );
};

export default UseStateHook;
