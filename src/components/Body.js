import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Body = ({ username }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);
  return (
    <div className="w-full bg-[#1F2A49] p-4 md:p-8 rounded-lg space-y-2">
      <div className="w-full flex gap-2">
        <div className="w-1/4 flex items-center justify-start h-24 ">
          {userData ? (
            <img
              src={userData.avatar_url}
              className="h-full rounded-full"
              alt="profile pictur"
            />
          ) : (
            <img
              src="https://i.stack.imgur.com/frlIf.png"
              className="h-full rounded-full"
              alt="profile pictur"
            />
          )}
        </div>
        <div className="w-3/4 h-full  flex flex-col gap-2">
          {userData ? (
            <h2 className="text-white text-2xl">{userData.name}</h2>
          ) : (
            <h2 className="text-white text-2xl">Lorem ipsum</h2>
          )}

          {userData ? (
            <h2 className="text-[#2563eb] text-md">@{userData.login}</h2>
          ) : (
            <h2 className="text-[#2563eb] text-md">@lorem_ipsum</h2>
          )}

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
          {userData ? (
            <p className="text-white font-bold">{userData.public_repos}</p>
          ) : (
            <p class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></p>
          )}
        </div>
        <div className="w-1/3 flex flex-col">
          <p className="text-gray-400">Followers</p>
          {userData ? (
            <p className="text-white font-bold">{userData.followers}</p>
          ) : (
            <p class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></p>
          )}
        </div>
        <div className="w-1/3 flex flex-col">
          <p className="text-gray-400">Following</p>
          {userData ? (
            <p className="text-white font-bold">{userData.following}</p>
          ) : (
            <p class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></p>
          )}
        </div>
      </div>
      <div className="w-full grid md:grid-cols-2 space-y-2 pt-6 gap-2 md:gap-0">
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt style={{ color: "#FFFFFF" }} />
          <p className="text-white">San Fransisco</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt style={{ color: "#FFFFFF" }} />
          <p className="text-white">San Fransisco</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt style={{ color: "#FFFFFF" }} />
          <p className="text-white">San Fransisco</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaMapMarkerAlt style={{ color: "#FFFFFF" }} />
          <p className="text-white">San Fransisco</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
