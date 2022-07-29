import express, { Response, Request } from 'express';
// import * as bodyParser from 'body-parser';

const app = express();

app.set('port', process.env.PORT || 3001);

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/json
// app.use(bodyParser.json());

// app.use((req: Request, res: Response, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

export default app;