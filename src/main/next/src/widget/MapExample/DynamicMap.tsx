"use client"
import { useEffect } from "react"
import Leaflet from "leaflet"
import * as ReactLeaflet from "react-leaflet"
import "leaflet/dist/leaflet.css"

const styles = "map"

const { MapContainer } = ReactLeaflet
interface test {
  children: any
  className: any
  width: any
  height: any
  rest: any
}
const Map = ({ children, className, width, height, ...rest }: test) => {
  let mapClassName = styles.map

  if (className) {
    mapClassName = `${mapClassName} ${className}`
  }

  useEffect(() => {
    ;(async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "leaflet/images/marker-icon-2x.png",
        iconUrl: "leaflet/images/marker-icon.png",
        shadowUrl: "leaflet/images/marker-shadow.png",
      })
    })()
  }, [])

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map
