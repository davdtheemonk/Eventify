"use client";

import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div className="h-screen bg-[#191a23] overflow-hidden flex flex-col p-5 py-20">
      <div className="mx-auto flex-col flex text-center  gap-4">
        <p className="text-2xl text-white">Log in your account</p>
        <p className="text-sm text-[#4a4c59] ">
          Secured event planner for your workspace, projects, events and teams
        </p>
        <div className="bg-[#20212e] shadow-md rounded-md flex flex-start flex-col text-start p-[15px] gap-4">
          <p>Email</p>
          <input
            value={email}
            className="custom-input border-[#2e3040] border-2  focus:border-[#575bc7] focus:border-2 focus:border-solid   w-full h-[40px] rounded-md"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p>Password</p>
          <input
            value={email}
            className="custom-input border-[#2e3040] border-2  focus:border-[#575bc7] focus:border-2 focus:border-solid   w-full h-[40px] rounded-md"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="bg-[#575bc7] text-white text-sm cursor-pointer h-[40px] mx-auto w-[90%] rounded-md">
          Log in
        </button>
      </div>
    </div>
  );
};

export default page;
