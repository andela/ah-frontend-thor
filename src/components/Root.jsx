/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";

import Header from "./Header";

const Root =({children})=> (
  <div>
    <Header />
    {children}
  </div>
);
export default Root;
