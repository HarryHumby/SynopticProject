import GET from './get';

export default (app) => {
    app.get('/status', GET);
}