import React, { createContext, Component } from "react";

export const audioContext = createContext();

const audioContextProvider = ({ children }) => {
  return <audioContext.Provider value={}>{children}</audioContext.Provider>;
};

export default audioContextProvider;
