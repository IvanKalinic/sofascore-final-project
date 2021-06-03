import React, { useState,useMemo } from "react";
import Football from "../../assets/images/football.jpg";
import { Close, FileUpload } from "../../assets/icons/index";
import "./index.scss";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  const { saveImage, deleteImage, findUser } = useTrackedEvents();
  const { user } = useAuth0();

  let currentUser = useMemo(() => findUser(user), [findUser, user]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="layout">
      <div className="image-container">
        <h2 className="upload-text">Upload your profile image</h2>
        <div className="box-upload">
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <span className="fileupload">
                    <FileUpload />
                  </span>
                  <div className="upload-text">Click to upload image</div>
                </label>
                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <div className="image-preview">
                <span
                  className="close-icon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                >
                  <Close />
                </span>

                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {isUploaded ? <h2>Type is {typeFile}</h2> : null}
      </div>
      <div>
        {currentUser && !currentUser.user.profileImage ? (
          <button type="submit" className="btn" onClick={() => saveImage(image)}>
            Submit
          </button>
        ) : (
          <div>
            <span onClick={deleteImage} className="close-btn">
              <Close />
            </span>
            {currentUser ? (
              <img src={currentUser.user.profileImage} alt="" />
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;

// return (
//   <div className="profile-container">
//     <img className="profile-container-img" src={Football} />
//     <div className="profile-container-filter"></div>
//     <div className="profile-container-hello">
//       <h1>Hello</h1>
//     </div>
//   </div>
// );
