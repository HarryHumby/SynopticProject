import axios from 'axios';

class AudioFiles {

    listMusic(search) {
      let url = `/api/audioFiles`;

      if (search) {
        url += `/${search}`; 
      }

      return axios.get(url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return {userMsg: "Unable to find audio files.", error: err};
        });
      }

}

export default new AudioFiles();