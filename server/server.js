import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

// Connection URL
const mongoURI = 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
      console.info('Server started on port', config.port);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the process with a failure code
  });
