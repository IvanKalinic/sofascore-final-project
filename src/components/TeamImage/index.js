import React, { memo, useState, useEffect } from "react";
import { getTeamImage } from "../../apis/index";
import PropTypes from "prop-types";
import "./index.scss";

function TeamImage({ id }) {
  const [image, setImage] = useState();

  useEffect(() => {
    getTeamImage(id).then((res) => {
      setImage(res.url);
    });
  }, [id]);

  return (
    <div>
      <img
        className="image"
        src={image}
        alt="imageofclub"
        onLoad={(e) => e.target.classList.add("active-img")}
      />
    </div>
  );
}

TeamImage.propTypes = {
  id: PropTypes.number.isRequired,
};
export default memo(TeamImage);
