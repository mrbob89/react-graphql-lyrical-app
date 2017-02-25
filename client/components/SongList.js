import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.data.loading
          ? <div>Loading...</div>
          : (
            <div>
              <ul className="collection">
                {this.renderSongs()}
              </ul>
              <Link
                to="/songs/new"
                className="btn-floating btn-large red right"
              >
                <i className="material-icons">add</i>
              </Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default graphql(query)(SongList);