import status from './status';
import audioFiles from './audioFiles';
import playlists from './playlists';

export default (app) => {
    status(app);
    audioFiles(app);
    playlists(app);
}