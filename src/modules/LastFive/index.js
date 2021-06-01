import React, { useEffect, useState,useMemo } from "react";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { lastFive, convertTimestampToDatetime } from "../../utils/index";
import { TeamImage, UniqueTournamentImage } from "../../components/index";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.scss";

const LastFive = () => {
  const [lastEvents, setLastEvents] = useState([]);
  const { favorites } = useTrackedEvents();
  const { user } = useAuth0();

  useEffect(() => {
    if (favorites[user?.sub]) setLastEvents(lastFive(favorites[user?.sub]));
  }, [favorites,user?.sub]);

  return (
    <div className="footer-container">
      <h1 className="fav">Favourites:</h1>
      {lastEvents.map((ev) => (
        <div className="events" key={ev.id}>
          <div className="eventlist-container">
            {ev.uniqueTournament ? (
              <div className="tournament-container">
                <UniqueTournamentImage id={ev.tournamentId} />
                <h4>{ev.tournament}</h4>
              </div>
            ) : null}
            <div className="clubs-container">
              <div className="details">
                <li>{convertTimestampToDatetime(ev.startTime)}</li>
              </div>
              <div className="teams-container">
                <div className="team-container">
                  <TeamImage id={ev.homeId} />
                  <span>{ev.homeTeam} </span>
                  <span className="score-footer">{ev.homeScore}</span>
                </div>

                <div className="team-container">
                  <TeamImage id={ev.awayId} />
                  <span>{ev.awayTeam}</span>
                  <span className="score-footer">{ev.awayScore}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastFive;
