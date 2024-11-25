import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.database_uri as string);

    app.listen(config.port, () => {
      console.log(`Bicycle Server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server();
