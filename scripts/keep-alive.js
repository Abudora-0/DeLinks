const { MongoClient } = require('mongodb')

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI)
  try {
    await client.connect()
    await client.db('Delinks').command({ ping: 1 })
    console.log('Keep-alive ping succeeded')
  } finally {
    await client.close()
  }
}

main().catch(err => {
  console.error('Keep-alive ping failed:', err)
  process.exit(1)
})
