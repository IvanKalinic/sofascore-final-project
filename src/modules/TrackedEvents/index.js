import React, { useEffect, useRef } from "react";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { Loader } from "../../components/index";
import { TeamImage, UniqueTournamentImage } from "../../components/index";
import { convertTimestampToDatetime } from "../../utils/index";
import { Link } from "react-router-dom";
import { Alert } from "../../components/index";
import { DetailsBf, Delete } from "../../assets/icons";


function TrackedEvents() {
  const { users, removeTracked, alert, handleAlert, findUser } =
    useTrackedEvents();

  const clicked = useRef(0);
  let currentUser = findUser();

  const handleRemove = (e) => {
    clicked.current++;
    removeTracked(e);
  };

  useEffect(() => {
    if (clicked.current > 0)
      handleAlert({ type: "danger", text: "Event deleted" });
  }, [users]);

  //currentUser.user.favourites
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      {currentUser ? (
        currentUser.user.favourites.map((event) => (
          <div className="event-container">
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
}

export default TrackedEvents;