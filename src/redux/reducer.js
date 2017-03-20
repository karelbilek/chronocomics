/* @flow */
import type {State} from './state';
import type {Action} from './action';
import {defaultState} from './state';

export default function (state: State = defaultState, action: Action): State {
  if (action.type === 'SET_NAMES') {
    return {
      first: action.first,
      second: action.second,
      hasVoted: 'none',
    };
  }
  if (action.type === 'SET_VOTED') {
    return {
      ...state,
      hasVoted: action.hasVoted,
    };
  }
  return state;
}
