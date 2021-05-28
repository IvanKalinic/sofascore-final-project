import React, { memo } from "react";
import { Link } from "react-router-dom";
import { TeamImage } from "../index";
import { convertTimestampToDatetime } from "../../utils/index";
import { DetailsBf, Star, StarFilled } from "../../assets/icons";
import "./index.scss";

const Event = ({ id, event, handleAdd }) => {
  return (
    <div className="clubs-container">
      <div className="details">
        <Link to={`/category/${id}/${event.id}/eventDetails`}>
          <DetailsBf />
        </Link>
        <li>{convertTimestampToDatetime(event.startTimestamp)}</li>
      </div>
      <div className="teams-container">
        <div className="team-container">
          <TeamImage id={event.homeTeam.id} />
          <span>{event.homeTeam.name} </span>
          <span className="score">
            {event.status.code !== 0 ? event.homeScore.current : null}
          </span>
        </div>

        <div className="team-container">
          <TeamImage id={event.awayTeam.id} />
          <span>{event.awayTeam.name}</span>
          <span className="score">
            {event.status.code !== 0 ? event.awayScore.current : null}
          </span>
        </div>
      </div>

      <div className="star-container">
        {!event.clicked ? (
          <Star onClick={() => handleAdd(event)} />
        ) : (
          <StarFilled onClick={() => handleAdd(event)} />
        )}
      </div>
    </div>
  );
}

export default memo(Event);
