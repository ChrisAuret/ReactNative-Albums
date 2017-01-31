import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(json => this.setState({ albums: json }));
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => console.log(response));
  }

  renderAlbums() {
      return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
