import React, { useEffect, useRef, useMemo } from "react";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { Loader } from "../../components/index";
import { TeamImage, UniqueTournamentImage } from "../../components/index";
import { convertTimestampToDatetime } from "../../utils/index";
import { Link } from "react-router-dom";
import { Alert } from "../../components/index";
import { DetailsBf, Delete } from "../../assets/icons";
import { useAuth0 } from "@auth0/auth0-react";

const TrackedEvents = () => {
  const { removeTracked, alert, handleAlert, favorites } =
    useTrackedEvents();
  const { user } = useAuth0();
  const clicked = useRef(0);

  const handleRemove = (e) => {
    clicked.current++;
    removeTracked(e);
  };

  useEffect(() => {
    if (clicked.current > 0)
      handleAlert({ type: "danger", text: "Event deleted" });
  }, [favorites,handleAlert]);

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {favorites ? (
        (favorites?.[user?.sub] ?? []).map((event, i) => (
          <div className="event-container" key={i}>
            <div className="eventlist-container">
              {event.uniqueTournament ? (
                <div className="tournament-container">
                  <UniqueTournamentImage id={event.tournamentId} />
                  <h4>{event.tournament}</h4>
                </div>
              ) : null}
              <div className="clubs-container">
                <div className="details">
                  <Link
                    to={`/category/${event.categoryId}/${event.id}/eventDetails`}
                  >
                    <DetailsBf />
                  </Link>
                  <li>{convertTimestampToDatetime(event.startTime)}</li>
                </div>
                <div className="teams-container">
                  <div className="team-container">
                    <TeamImage id={event.homeId} />
                    <span>{event.homeTeam} </span>
                  </div>
                  <div className="team-container">
                    <TeamImage id={event.awayId} />
                    <span>{event.awayTeam}</span>
                  </div>
                </div>
                <div className="star-container">
                  <Delete onClick={() => handleRemove(event)} />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TrackedEvents;
