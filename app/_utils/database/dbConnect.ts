import * as process from 'node:process';
import mongoose, { Mongoose } from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}


if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null
  };
}

async function dbConnect(): Promise<Mongoose> {
  const MONGODB_URL = process.env.MONGODBURL;

  if (!MONGODB_URL) {
    throw new Error(
      'Please define the MONGODBURL environment variable inside .env.local'
    );
  }


  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }
  if (!global.mongoose.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false
    };

    global.mongoose.promise = mongoose.connect(MONGODB_URL, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (error) {
    global.mongoose.promise = null;
    throw error;
  }

  return global.mongoose.conn;
}

export default dbConnect;