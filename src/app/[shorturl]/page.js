import { redirect } from "next/navigation"
import getClientPromise from "@/lib/mongodb"

export const dynamic = "force-dynamic"

export default async function Page({ params }) {
  const { shorturl } = await params

  let target = null
  try {
    const client = await getClientPromise()
    const doc = await client.db("Delinks").collection("url").findOne({ shorturl })
    if (doc?.url) {
      // Stored URLs may be missing a scheme; treat those as external.
      target = /^https?:\/\//i.test(doc.url) ? doc.url : `https://${doc.url}`
    }
  } catch (error) {
    console.error(`lookup failed for "${shorturl}":`, error)
  }

  redirect(target || "/")
}
