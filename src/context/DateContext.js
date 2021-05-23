import React, { useContext, useState, createContext } from "react";
import PropTypes from "prop-types";

const DateContext = createContext();

export const useDate = () => {
  const dateContext = useContext(DateContext);

  if (dateContext === undefined) {
    throw new Error("useDate must be used within a DateProvider");
  }

  return dateContext;
};
export function DateProvider({ children }) {
  const [date, setDate] = useState(new Date(Date.now()));

  const handleDateChange =(e) => {
    setDate(e.target.value);
  };

  const value = {
    date,
    handleDateChange,
  };
  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
}

DateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
