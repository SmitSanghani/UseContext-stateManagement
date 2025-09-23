import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <p>Please login to see your profile.</p>;
  }
  return (
    <div>
      Profile
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
    </div>
  );
};

export default Profile;
