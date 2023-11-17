import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Body = ({ userData }) => {
  const formatGitHubDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
            <h2 className="text-white text-2xl">John Doe</h2>
          )}

          {userData ? (
            <h2 className="text-[#2563eb] text-md">@{userData.login}</h2>
          ) : (
            <h2 className="text-[#2563eb] text-md">@john_doe</h2>
          )}
          {userData ? (
            <p className="text-gray-200 text-md">
              Joined {formatGitHubDate(userData?.created_at)}
            </p>
          ) : (
            <p className="text-gray-200 text-md">Joined on 01/01/2000</p>
          )}
        </div>
      </div>
      <div className="w-full py-4">
        {userData ? (
          <p className="text-gray-200 text-md">{userData.bio}</p>
        ) : (
          <p className="text-gray-200 text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        )}
      </div>
      <div className="w-full p-4 px-6 rounded-lg bg-[#131C30] flex">
        <div className="w-1/3 flex flex-col gap-2">
          <p className="text-gray-400">Repos</p>
          {userData ? (
            <p className="text-white font-bold">{userData.public_repos}</p>
          ) : (
            <p class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></p>
          )}
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <p className="text-gray-400">Followers</p>
          {userData ? (
            <p className="text-white font-bold">{userData.followers}</p>
          ) : (
            <p class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2"></p>
          )}
        </div>
        <div className="w-1/3 flex flex-col gap-2">
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
          {userData &&
          userData.location !== null &&
          userData.location !== undefined ? (
            <p className="text-white">{userData.location}</p>
          ) : (
            <p className="text-white">No location provided</p>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <FaLink style={{ color: "#FFFFFF" }} />
          {userData && userData.blog !== null && userData.blog !== undefined ? (
            <p className="text-white">{userData.blog}</p>
          ) : (
            <p className="text-white">No blog provided</p>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <FaXTwitter style={{ color: "#FFFFFF" }} />
          {userData &&
          userData.twitter_username !== null &&
          userData.twitter_username !== undefined ? (
            <p className="text-white">{userData.twitter_username}</p>
          ) : (
            <p className="text-white">No Twitter account provided</p>
          )}
        </div>
        <div className="flex gap-4 items-center">
          <FaRegBuilding style={{ color: "#FFFFFF" }} />
          {userData &&
          userData.company !== null &&
          userData.company !== undefined ? (
            <p className="text-white">{userData.company}</p>
          ) : (
            <p className="text-white">No company provided</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
