"use client";
import React, { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [member, setMember] = useState("");
  return (
    <InfoContext.Provider value={{ name, setName, member, setMember }}>
      {children}
    </InfoContext.Provider>
  );
};
