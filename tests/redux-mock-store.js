/* eslint-disable lines-around-directive */
/* eslint-disable strict */
"use strict";

import configureMockStore from "redux-mock-store";
import { applyMiddleware } from "redux";

const mockStore = configureMockStore(applyMiddleware);

export default mockStore;
