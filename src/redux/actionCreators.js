/* @flow */
import type {Action} from './action';

export function vote(entry: number): Action {
  return {
    type: 'SET_VOTED',
    hasVoted: entry === 0 ? 'first' : 'second',
  };
}
