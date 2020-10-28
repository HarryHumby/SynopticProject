import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();
const router = express.Router();


app.use(express.static('dist/react'));
app.use('/resources', express.static('resources'));
app.use('/api/', router);

router.use(bodyParser.json());

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}!`)
    routes(router);
});
