import Database from '../../services/Database';

export default (req, res) => {
    
    Database.searchAudioFiles(req.params.search)
        .then((audioFiles) => {
            res.send(audioFiles).end();
        })
        .catch((err) => {
            res.status(400).send(err);
        })

}