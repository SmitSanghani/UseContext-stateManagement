import React from "react";
import { useContext } from "react";
import { Usercontext } from "../context/Usercontext";

const Profile = () => {
  const { user } = useContext(Usercontext);

  if (!user) {
    return <p>Please login to see your profile.</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        backgroundColor: "#eaeaea",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Profile;
