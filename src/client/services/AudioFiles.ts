import axios from 'axios';

class AudioFiles {

    listMusic() {
        return axios.get(`/api/audioFiles`)
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            return {userMsg: "Unable to find audio files.", error: err};
          });
      }

}

export default new AudioFiles();