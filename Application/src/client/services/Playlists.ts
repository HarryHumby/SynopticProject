import axios from 'axios';

class Playlists {

  listPlaylists() {
    return axios.get(`/api/playlists`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return {userMsg: "Unable to find playlists.", error: err};
      });
  }

  createPlaylist(playlistData) {
    return axios.post(`/api/playlists/new`, playlistData)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return {userMsg: "Unable to find playlists.", error: err};
      });
  }

}

export default new Playlists();