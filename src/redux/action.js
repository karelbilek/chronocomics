/* @flow */

export type Action = {
	type: 'SET_NAMES',
	first: string,
	second: string
} | {
	type: 'SET_VOTED',
	hasVoted: 'first' | 'second' | 'none'
};

