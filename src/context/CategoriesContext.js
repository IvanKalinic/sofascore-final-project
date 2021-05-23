import React, {useContext, createContext } from "react";
// import useLocalStorage from "../hooks/useLocalStorage.js";
import PropTypes from 'prop-types';

const CategoriesContext = createContext();

export function useCategories() {
  const categoriesContext = useContext(CategoriesContext);

  if (categoriesContext === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return categoriesContext;
}

export function CategoriesProvider({ children }) {

  const sports = [
    { id: 1, value: "Football" },
    { id: 2, value: "Basketball" },
    { id: 3, value: "Handball" },
    { id: 4, value: "Waterpolo" },
    { id: 5, value: "Tennis" },
  ];

  const value = {
    sports,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

CategoriesProvider.propTypes = {
  children:PropTypes.node.isRequired
}