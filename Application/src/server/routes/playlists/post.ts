import Database from '../../services/Database';

export default (req, res) => {
    
    Database.createPlaylist(req.body)
        .then((playlists) => {
            res.send(playlists).end();
        })
        .catch((err) => {
            res.status(400).send(err);
        })

}