import React, { useState, useContext, createContext, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

const TrackedEventsContext = createContext();

export const useTrackedEvents = () => {
  const trackedEventsContext = useContext(TrackedEventsContext);

  if (trackedEventsContext === undefined) {
    throw new Error(
      "useTrackedEvents must be used within a TrackedEventsContext"
    );
  }

  return trackedEventsContext;
};

let temp = [];

export const TrackedEventsProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [favorites, setFavorites] = useLocalStorage("favorites", {})

  const [alert, setAlert] = useState({ show: false });
  const [profileImage, setProfileImage] = useState("");

  const { user } = useAuth0();

  const handleAlert = useCallback(({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1000);
  },[setAlert]);

  useEffect(() => {
    if (users.lenght > 0) {
      if (!users.find((u) => u.user.name === user.name)) {
        temp = [];
        console.log(`Temp is ${temp}`);
      }
    }
  }, [users,user?.name]);

  const addToTracked = (e, id) => {
    const newTrackedEvent = {
      categoryId: id,
      id: e.id,
      key: e.id,
      awayTeam: e.awayTeam.name,
      homeTeam: e.homeTeam.name,
      tournament: e.tournament.name,
      uniqueTournament: e.tournament.uniqueTournament,
      tournamentId: e.tournament.uniqueTournament.id,
      homeId: e.homeTeam.id,
      awayId: e.awayTeam.id,
      startTime: e.startTimestamp,
      clicked: e.clicked,
      awayScore: e.awayScore.current,
      homeScore: e.homeScore.current,
    };
    temp.push(newTrackedEvent);

    setFavorites({ ...favorites, [user.sub]: [ ...(favorites[user.sub] || []), newTrackedEvent ] })

    setUsers([
      {
        user: {
          ...user,
          profileImage: profileImage,
        },
      },
    ]);
  };

  const removeTracked = (e) => {
    const filteredUserFavorites =  (favorites?.[user?.sub] || []).filter((ev) => ev.id !== e.id);

    setFavorites({
      ...favorites,
      [user.sub]: [...filteredUserFavorites]
    })
  }

  const findUser = (user) => {
    if (user) {
      return users.find((u) => u.user.name === user.name);
    }
  };

  const saveImage = (image) => {
    setProfileImage(image);
    setUsers([
      {
        user: {
          ...user,
          profileImage: image,
        },
      },
    ]);
  };

  const deleteImage = () => {
    setProfileImage("");
    setUsers([
      {
        user: {
          ...user,
          profileImage: "",
        },
      },
    ]);
  };

  const value = {
    favorites,
    users,
    alert,
    findUser,
    handleAlert,
    addToTracked,
    removeTracked,
    saveImage,
    deleteImage,
  };

  return (
    <TrackedEventsContext.Provider value={value}>
      {children}
    </TrackedEventsContext.Provider>
  );
};

TrackedEventsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
