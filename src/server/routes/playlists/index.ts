import GET from './get';
import POST from './post';

export default (app) => {
    app.get('/playlists', GET);
    app.post('/playlists/new', POST);
}