import React, { useState, useEffect } from "react";

const UserProfile = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          {/* Add more user information as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
