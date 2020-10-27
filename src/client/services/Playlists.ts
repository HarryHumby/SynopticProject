import axios from 'axios';

class Playlists {

    listMusic() {
        return axios.get(`/api/playlists`)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return {userMsg: "Unable to find playlists.", error: err};
          });
      }

}

export default new Playlists();