import GET from './get';

export default (app) => {
    app.get('/audioFiles', GET);
}