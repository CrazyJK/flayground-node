import express from 'express';
import flayApiRouter from './Router/flayApiRouter.js';
// import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

// app.use(cors());
app.use('/api', flayApiRouter);
app.listen(port, () => {
	console.log(`
    ############################################
        Flay server start. Listening on ${port}
    ############################################
	`);
});
