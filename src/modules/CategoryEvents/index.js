import React, { useState, useEffect, useCallback } from "react";
import { Redirect, useParams } from "react-router";
import { getCategoryEvents } from "../../apis/index";
import { useCategories } from "../../context/CategoriesContext";
import { UniqueTournamentImage } from "../../components/index";
import { Loader, Event } from "../../components/index";
import "./index.scss";
import { useTrackedEvents } from "../../context/TrackedEventsContext";
import { Alert } from "../../components/index";
import { getFormattedDate } from "../../utils/index";
import { CaretUp, CaretDown } from "../../assets/icons";
import { useAuth0 } from "@auth0/auth0-react";

const CategoryEvents =() => {
  const { id } = useParams();
  const { date } = useCategories();
  const { addToTracked, removeTracked, alert, handleAlert } =
    useTrackedEvents();
  const [error, setError] = useState(false);
  const [tournaments, setTournaments] = useState([]);
  const { findUser } = useTrackedEvents();
  const { user } = useAuth0();

  const handleAdd = (e) => {
    if (!user) {
      handleAlert({ type: "warning", text: "Please login to add favourites" });
    } else {
      e.clicked = !e.clicked;
      if (e.clicked) {
        addToTracked(e, id);
        handleAlert({ type: "success", text: "Event added to favourites" });
      } else {
        removeTracked(e);
        handleAlert({ type: "danger", text: "Event removed from favourites" });
      }
    }
  };

  const handleUp = (tournament) => {
    setTournaments(
      tournaments.map((e) => {
        if (e.tournament.id === tournament.tournament.id) {
          return {
            ...e,
            up: !e.up,
          };
        }
        return e;
      })
    );
  };
  // console.log(user);

  const getCategories = () =>{
    let foundUser = findUser(user);
    // console.log(foundUser);
    getCategoryEvents(id, getFormattedDate(date))
      .then((res) => {
        if (res.events.length > 0) {
          const value = res.events.map((e) => {
            if (foundUser) {
              const response = foundUser.user.favourites.find(
                (tr) => tr.id === e.id
              );
              if (response) {
                //-1
                return {
                  ...e,
                  clicked: true,
                  up: false,
                };
              } else {
                return {
                  ...e,
                  clicked: false,
                  up: false,
                };
              }
            } else {
              return {
                ...e,
                clicked: false,
                up: false,
              };
            }
          });

          let temp = [];
          value.map((ev) => {
            if (!temp.some((temp) => temp.tournament.id === ev.tournament.id)) {
              temp.push({
                tournament: ev.tournament,
                up: false,
                events: [],
              });
            }
          });

          setTournaments(
            temp.map((temp) => {
              const valueEv = [];
              value.map((val) => {
                if (temp.tournament.name === val.tournament.name) {
                  valueEv.push(val);
                }
              });
              return {
                ...temp,
                events: valueEv,
              };
            })
          );
        } else {
          setError(true);
          console.log("This is error");
        }
      })
      .catch((err) => {
        setError(true);
        console.log("this is catch block");
      });
  }

  useEffect(() => {
    setTournaments([]);
    getCategories();
    setInterval(() => {
      getCategories();
    }, 50000);
  }, [id]);


  return (
    <div className="parent-container">
      <div className="alert-vh">
        {alert.show && <Alert type={alert.type} text={alert.text} />}
      </div>
      {tournaments.length > 0 ? (
        tournaments.map((e) => (
          <div className="event-container" key={e.tournament.id}>
            {e.tournament.uniqueTournament ? (
              <div className="eventlist-container">
                <div className="tournament-container">
                  <UniqueTournamentImage
                    id={e.tournament.uniqueTournament.id}
                  />
                  <h4 className="tournament">{e.tournament.name}</h4>
                  <span className="caret" onClick={() => handleUp(e)}>
                    {!e.up ? <CaretDown /> : <CaretUp />}
                  </span>
                </div>
                {e.events.map((ev) => (
                  <div>
                    {e.up ? (
                      <Event
                        id={id}
                        key={ev.id}
                        event={ev}
                        handleAdd={handleAdd}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>{!error ? <Loader /> : <Redirect to="/error" />}</div>
      )}
    </div>
  );
}

export default CategoryEvents;
