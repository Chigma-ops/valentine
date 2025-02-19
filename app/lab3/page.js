"use client";

import React, { useState } from "react";

const UseStateHook = () => {
    const [name, setName] = useState("");

    return (
        <div className="flex justify-center items-center h-screen w-full bg-white">
            <p className="text-xl font-bold mb-2 text-black mr-10">Name:</p>
            <input
                type="text"
                className="border border-black rounded p-3 mb-4 text-black"
                size="25"
                onChange={(e) => setName(e.target.value)}
            />
            <p className="ml-5 text-black">Hi Nest 11v</p>
            {name === "" ? <p className="ml-3 text-black">Suragch</p> : <p className="ml-3 text-black">{name}</p>}
        </div>
    );
};

export default UseStateHook;

