import React from "react";

const Body = () => {
  return (
    <div className="w-full bg-[#1F2A49] p-4 md:p-8 rounded-lg">
      <div className="w-full flex gap-2">
        <div className="w-1/4 flex items-center justify-start h-24 bg-red-200">
          <img
            src="https://i.stack.imgur.com/frlIf.png"
            className="h-full rounded-full"
            alt="profile pictur"
          />
        </div>
        <div className="w-3/4 h-full bg-green-200">
          <p>hi</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
