"use client";
import React, { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineContextProvider = ({ children }) => {
  const [timelines, setTimelines] = useState([]);
  const [trackingBtn, setTrackingBtn] = useState("");

  const value = {
    timelines,
    setTimelines,
    trackingBtn,
    setTrackingBtn,
  };

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineContextProvider;
