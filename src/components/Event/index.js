import React,{memo} from "react";
import { Link } from "react-router-dom";
import { TeamImage } from "../index";
import { convertTimestampToDatetime } from "../../utils/index";
import { DetailsBf, Star, StarFilled } from "../../assets/icons";
import "./index.scss";

function Event({
  awayScore,
  homeScore,
  handleAdd,
  event,
  id,
  eventId,
  startTimestamp,
  homeTeam,
  awayTeam,
  status,
}) {
  return (
    <div className="clubs-container">
      <div className="details">
        <Link to={`/category/${id}/${eventId}/eventDetails`}>
          <DetailsBf />
        </Link>
        <li>{convertTimestampToDatetime(startTimestamp)}</li>
      </div>
      <div className="teams-container">
        <div className="team-container">
          <TeamImage id={homeTeam.id} />
          <span>{homeTeam.name} </span>
          <span className="score">{status !== 0 ? homeScore : null}</span>
        </div>

        <div className="team-container">
          <TeamImage id={awayTeam.id} />
          <span>{awayTeam.name}</span>
          <span className="score">{status !== 0 ? awayScore : null}</span>
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
