import React from 'react';
import useAppState from '../utils/useAppState';

import { ResultType } from '../types';

import * as actions from "../actions";

interface InitialStateType {
  result: ResultType,
  liked: Array<ResultType>,
  history: Array<ResultType>,
}

const initialState : InitialStateType = {
  result: undefined,
  liked: [],
  history: [],
};

const useuseAppStore = useAppState(React, initialState, actions);

export default useuseAppStore;
