import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [serachResults, setsearchResult] = useState([]);
  const [selectCatogoies, setsetselectCatogoies] = useState("New");
  const [mobileMenu, setmobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCatogoies);
  }, [selectCatogoies]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setsearchResult(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        serachResults,
        setsearchResult,
        selectCatogoies,
        setsetselectCatogoies,
        mobileMenu,
        setmobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
