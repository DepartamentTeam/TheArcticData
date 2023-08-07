import { nanoid } from "nanoid"
export { getFeatureInfo, generateKey }

const generateKey = (): string => {
  return nanoid(4).toString()
}

async function getFeatureInfo(event: any) {
  console.log("Empty features:", event)
  try {
    const res = await fetch(event.url)
    return res.json()
  } catch (err) {
    console.log("Fetching error:", err)
  }
}
