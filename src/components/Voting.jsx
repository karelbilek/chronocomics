/* @flow */
import React from 'react';
import type {State} from '../redux/state';
import * as actionCreators from '../redux/actionCreators';

import {connect} from 'react-redux';

type StaticProps = {
  first: string;
  second: string;
  hasVoted: 'first' | 'second' | 'none';
};

type Props = StaticProps & {
  vote: (entry: number) => void,
}

export class Voting extends React.PureComponent {
  props: Props;

  getPair(): [string, string] {
    return [this.props.first, this.props.second];
  }

  hasVoted(): boolean {
    return this.props.hasVoted !== 'none';
  }

  votedFor(i: number): boolean {
    if (this.props.hasVoted === 'first' && i === 0) {
      return true;
    }
    if (this.props.hasVoted === 'second' && i === 1) {
      return true;
    }
    return false;
  }

  _renderEntry(entry: string, i: number) {
    return <button
      key={ entry }
      disabled={ this.hasVoted() }
      onClick={ () => this.props.vote(i) }
    >
      <h1>{entry}</h1>
      {
        this.votedFor(i)
        ? <div
          className='label'
        >
          Voted
        </div>
        : null
      }
    </button>;
  }

  render() {
    return <div
      className='voting'
    >
      {
        this.getPair().map((entry, i) => this._renderEntry(entry, i))
      }
    </div>;
  }
}

function mapStateToProps(state: State): StaticProps {
  return state;
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
