export { getFeatureInfo }

async function getFeatureInfo(event) {
  console.log("Empty features:", event)
  const res = await fetch(event.url)

  if (!res.ok) {
    console.error("Error fetching features")
  }
  return res.json()
}
