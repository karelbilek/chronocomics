/* @flow */
export type State = {
	first: string;
	second: string;
	hasVoted: 'first' | 'second' | 'none';
}

export const defaultState: State = {
  first: 'ff',
  second: 'ss',
  hasVoted: 'none',
};
