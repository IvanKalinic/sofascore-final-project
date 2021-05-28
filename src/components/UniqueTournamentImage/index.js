import React, { memo, useState, useEffect } from "react";
import { getUniqueTournamentImage } from "../../apis/index";
import PropTypes from "prop-types";
import "./index.scss";

const UniqueTournamentImage = ({ id }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    getUniqueTournamentImage(id).then((res) => {
      setImage(res.url);
    });
  }, [id]);

  return (
    <div>
      <img
        className="image"
        src={image}
        onLoad={(e) => e.target.classList.add("active-img")}
        alt="imageofclub"
      />
    </div>
  );
}

UniqueTournamentImage.propTypes = {
  id: PropTypes.number.isRequired,
};
export default memo(UniqueTournamentImage);
