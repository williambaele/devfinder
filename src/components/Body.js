import React from "react";

const Body = () => {
  return (
    <div className="w-full bg-[#1F2A49] p-4 md:p-8 rounded-lg space-y-2">
      <div className="w-full flex gap-2">
        <div className="w-1/4 flex items-center justify-start h-24 ">
          <img
            src="https://i.stack.imgur.com/frlIf.png"
            className="h-full rounded-full"
            alt="profile pictur"
          />
        </div>
        <div className="w-3/4 h-full  flex flex-col gap-2">
          <h2 className="text-white text-2xl">Lorrem ipsum</h2>
          <p className="text-[#2563eb] text-md">@loremipsumofficiel</p>
          <p className="text-gray-200 text-md">Joined 25 Jan 2011</p>
        </div>
      </div>
      <div className="w-full py-4">
        <p className="text-gray-200 text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className="w-full p-4 px-6 rounded-lg bg-[#131C30] flex">
        <div className="w-1/3 flex flex-col">
          <p className="text-gray-400">Repos</p>
          <p className="text-white font-bold">8</p>
        </div>
        <div className="w-1/3 flex flex-col">
          <p className="text-gray-400">Followers</p>
          <p className="text-white font-bold">4898</p>
        </div>
        <div className="w-1/3 flex flex-col">
          <p className="text-gray-400">Following</p>
          <p className="text-white font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
