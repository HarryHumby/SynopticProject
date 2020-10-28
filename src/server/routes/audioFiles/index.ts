import getAll from './getAll';
import GetSearch from './getSearch';

export default (app) => {
    app.get('/audioFiles', getAll);
    app.get('/audioFiles/:search', GetSearch);
}