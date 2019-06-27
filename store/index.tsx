import React from 'react';
import useAppState from '../utils/useAppState';

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

const appStore = useAppState(React, initialState, actions);

export default appStore;
