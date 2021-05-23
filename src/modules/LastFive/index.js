import React, { useEffect, useState } from "react";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { lastFive, convertTimestampToDatetime } from "../../utils/index";
import { TeamImage, UniqueTournamentImage } from "../../components/index";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.scss";

function LastFive() {
  const [lastEvents, setLastEvents] = useState([]);
  const { users,findUser,changed } = useTrackedEvents();
  const { user } = useAuth0();

  let currentUser = findUser(user);
  
  console.log(currentUser);
  
  useEffect(() => {
    
    if(currentUser)
      setLastEvents(lastFive(currentUser.user.favourites));

  }, [users]);

  console.log(lastEvents);

  return (
    <div className="footer-container">
        <h1 className="fav">Favourites:</h1>
      {lastEvents.map((ev) => (
        <div className="events">
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
}

export default LastFive;
