import getClientPromise from "@/lib/mongodb"

export const dynamic = "force-dynamic"

async function getCollection() {
  const client = await getClientPromise()
  return client.db("Delinks").collection("url")
}

// GET is used by the shorten page on load to warm the function and the
// database connection, so the first real request does not lose the
// cold-start race.
export async function GET() {
  try {
    const client = await getClientPromise()
    await client.db("Delinks").command({ ping: 1 })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false }, { status: 503 })
  }
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ success: false, message: "Invalid request body." }, { status: 400 })
  }

  const url = typeof body?.url === "string" ? body.url.trim() : ""
  const shorturl = typeof body?.shorturl === "string" ? body.shorturl.trim() : ""

  if (!url || !shorturl) {
    return Response.json(
      { success: false, message: "Enter both a URL and an alias." },
      { status: 400 }
    )
  }

  // One transparent retry: the first DB call after a cold start can time out
  // before Atlas server selection finishes. The retry reuses the warm pool.
  let lastError
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const collection = await getCollection()

      const existing = await collection.findOne({ shorturl })
      if (existing) {
        return Response.json(
          { success: false, message: "That alias is already taken." },
          { status: 409 }
        )
      }

      await collection.insertOne({ url, shorturl, createdAt: new Date() })
      return Response.json({ success: true, message: "URL generated successfully." })
    } catch (error) {
      lastError = error
      if (attempt === 1) await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  console.error("POST /api/generate failed:", lastError)
  return Response.json(
    { success: false, message: "Could not reach the database. Please try again." },
    { status: 503 }
  )
}
