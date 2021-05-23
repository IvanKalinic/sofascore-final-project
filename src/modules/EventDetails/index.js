import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getEventDetails } from "../../apis/index";
import { Loader } from "../../components/index";
import { useDate } from "../../context/DateContext";
import { getFormattedDetailsDate } from "../../utils/index"
import "./index.scss"

function EventDetails() {
  const { eventId } = useParams();
  const [details, setDetails] = useState(null);
  const { date } = useDate();

  useEffect(() => {
    getEventDetails(eventId).then((res) => setDetails(res.event));
  }, [eventId]);

  console.log(details);
  return (
    <>
      {details ? (
        <section>
          <h2 className="details">Details:</h2>
          {details.tournament.name}
          <p>
            {details.homeTeam.name} - {details.awayTeam.name}{" "}
          {details.round ? {",Gameweek ":details.roundInfo.round}  : null}
          </p>
          <article>
            {details.venue && (
              <div>
                <h5>{`${details.venue.stadium.name} - ${details.venue.city.name},${details.venue.country.name}`}</h5>
                <p>Stadium capacity: {details.venue.stadium.capacity}</p>
              </div>
            )}
            {date ? <p>{getFormattedDetailsDate(date)}</p> : null}
            <p>Attendance : {details.attendance}</p>
          </article>
          {details.status ? (
            <span>{`${details.homeScore.display} : ${details.awayScore.display}`}</span>
          ) : (
            <span>Not started</span>
          )}
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default EventDetails;
