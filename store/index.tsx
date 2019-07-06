import React from 'react';
import useAppState from '../utils/useAppState';

import { ResultType } from '../types';

import * as actions from "../actions";

interface InitialStateType {
  result: ResultType,
  liked: Array<ResultType>,
  history: Array<ResultType>,
  loading: boolean,
  location: {
    hasPermission: boolean,
    address: Object,
    coords: Object,
  }
}

const initialState : InitialStateType = {
  result: null,
  liked: [],
  history: [],
  loading: false,
  location: {
    hasPermission: true,
    address: null,
    coords: null,
  }
};

const useuseAppStore = useAppState(React, initialState, actions);

export default useuseAppStore;
