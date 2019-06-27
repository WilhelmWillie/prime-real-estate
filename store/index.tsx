import React from 'react';
import appStateHook from '../utils/appStateHook';

import * as actions from "../actions";

const initialState = {
  result: {
    neighborhood: '',
    street: '',
    avgValue: 0,
  },
  liked: [
    {
      key: 'ITEM-0',
      address: '1234 Main Street',
      avgValue: 1200000
    },
  ],
  history: [
    {
      key: 'ITEM-0',
      address: '1234 Main Street',
      avgValue: 1200000
    },
    {
      key: 'ITEM-1',
      address: '1234 Main Avenue',
      avgValue: 2000000
    },
  ],
};

const appStore = appStateHook(React, initialState, actions);

export default appStore;
