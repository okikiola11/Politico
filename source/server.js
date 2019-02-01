import express from 'express';
import bodyParser from 'body-parser';

import userRoute from './routes/api/user';
import adminRoute from './routes/api/index';

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Politico' });
});

// Registering Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/admin', adminRoute);

// Route does not match any registered router
app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'The endpoint you have requested does not exist on this server'
  });
});

// Declaring port variable
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Amazing stuff is happening on port: ${port}`);
});
