// lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('Missing MONGODB_URI environment variable')
}

const options = {
  // Give up server selection well before the serverless function is killed
  // (Netlify caps sync functions at ~10s), so a cold start surfaces a real
  // error we can retry instead of a request that hangs until it is terminated.
  serverSelectionTimeoutMS: 8000,
  connectTimeoutMS: 8000,
  socketTimeoutMS: 20000,
  // Serverless-friendly pool: keep it small and let idle sockets close.
  maxPoolSize: 5,
  minPoolSize: 0,
  maxIdleTimeMS: 60000,
}

// Share one connection across warm invocations by caching the connect()
// promise on globalThis (survives HMR in dev and module reuse in prod).
// Never keep a *rejected* promise around: if the first connect fails, the
// cache is cleared so the next call starts a fresh attempt.
function connect() {
  const client = new MongoClient(uri, options)
  const promise = client.connect().catch((err) => {
    if (globalThis._mongoClientPromise === promise) {
      globalThis._mongoClientPromise = undefined
    }
    throw err
  })
  return promise
}

export default function getClientPromise() {
  if (!globalThis._mongoClientPromise) {
    globalThis._mongoClientPromise = connect()
  }
  return globalThis._mongoClientPromise
}
