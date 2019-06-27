import React from 'react';
import appStateHook from '../utils/appStateHook';

import * as actions from "../actions";

const initialState = {
  result: {
    neighborhood: '',
    street: '',
    avgValue: 0,
  },
  liked: [],
  history: [],
};

const appStore = appStateHook(React, initialState, actions);

export default appStore;
