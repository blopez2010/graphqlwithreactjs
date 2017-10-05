import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div></div>;
    }

    return (
      <div>
        <Link to="/" className="btn">Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => { //REMARK: Fetch from query params.
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(SongDetail);