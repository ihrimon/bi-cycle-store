import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// creating a function for connect to the database
async function server() {
  try {
    await mongoose.connect(config.database_uri as string);

    app.listen(config.port, () => {
      console.log(`Bicycle Server listening on port at ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

// calling the function
server();
