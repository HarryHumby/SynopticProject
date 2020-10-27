import Database from '../../services/Database';

export default (req, res) => {

    Database.listAudioFiles()
        .then((audioFiles) => {
            res.send(audioFiles).end();
        })
        .catch((err) => {
            res.status(400).send(err);
        })
}