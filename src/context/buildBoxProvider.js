import React, { useState } from "react";
import buildBoxContext from "./buildBoxContext";

function buildBoxProvider({ children }) {
  return (
    <buildBoxContext.Provider value={{}}>
        {children}
    </buildBoxContext.Provider>
  );
}

export default buildBoxProvider;