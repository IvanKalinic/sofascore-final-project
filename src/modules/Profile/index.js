import React from "react";
import "./index.scss";
import Football from "../../assets/images/football.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <img className="profile-container-img" src={Football} />
      <div className="profile-container-filter"></div>
      <div className="profile-container-hello">
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default Profile;
