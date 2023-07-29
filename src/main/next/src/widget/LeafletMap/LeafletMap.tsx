"use client"
import { useState,  useEffect } from "react"
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON
} from "react-leaflet"
import "leaflet.nontiledlayer"
import { InfoWMSTileLayer } from "react-leaflet-infowms"
import type { MapOptions } from "leaflet"
import { MapCard } from "../../enteties/MapCard/MapCard"
import { nanoid } from "nanoid"
import ky from "ky"

import {
  useMapThemeStore,
  useSecondaryMapCardStore,
  useStore,
} from "@/shared/store/store"
import ColorLegend from "./ColorLegend"
import useMediaQuery, { isMobileScreen } from "@/shared/lib/useMediaQuery"
import { SideSheetsModal } from "@/enteties/SideSheetModal"
import { LayerSelector } from "./LayersSelector"
import { getFeatureInfo } from "./utils"

interface ILeafletMap {
  layer: string
}


const generateKey= ():string => { return nanoid(4).toString() }

export const LeafletMap = () => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  const [key, setNewKey] = useState<string>()
  const [cardData, setCardData] = useState()
  const { setProps } = useSecondaryMapCardStore()

 
  const [keyRoadGeoJson, setKeyRoadGeoJson] = useState<string>()
  const [roadGeoJSON, setRoadGeoJSON] = useState(null)
  const handelGetGeoJSON = (id: number) => {
    fetch(`http://localhost:8080/route?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
         setRoadGeoJSON(data)
        console.log(data)
      })
  }

  useEffect(() => {
    if (cardData?.settlement !== undefined) {
      setKeyRoadGeoJson(generateKey())
      handelGetGeoJSON(cardData?.id)
    }
  }, [cardData])

  const Layers = useStore().layers

  const LayersString = Layers.join(",")

  useEffect(() => {
    setNewKey(generateKey())
  }, [LayersString])

  const [viewState, setViewState] = useState<MapOptions>({
    center: { lat: 72, lng: 60 },
    zoom: 3,
  })

  const light_map = {
    attribution:
      '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  }
  const dark_map = {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.carto.com/" target="_blank">CARTO</a>',
  }
  
  const theme = window.localStorage.getItem("mapTheme")
  return (
    <>
      {cardData && <MapCard props={cardData} />}
      <MapContainer
        doubleClickZoom={false}
        className="map-tiles"
        dragging
        id="map-container"
        {...viewState}
        minZoom={3}
      >
        {cardData?.itog_letters_group && <ColorLegend />}
        {roadGeoJSON && <GeoJSON
         key={keyRoadGeoJson} 
         data={roadGeoJSON}
         
        />}

{cardData?.geometry2 && <GeoJSON
         key={keyRoadGeoJson} 
         data={cardData?.geometry2}
         
        />}
        <TileLayer
          attribution={
            theme === "dark" ? dark_map.attribution : light_map.attribution
          }
          url={theme === "dark" ? dark_map.url : light_map.url}
        />
        <InfoWMSTileLayer
          key={`${key}-info`}
          crossOrigin="anonymous"
          url="http://62.113.107.81:8081/geoserver/department/wms"
          params={{
            
            version: '1.1.0',
            Request: "GetFeatureInfo",
            key: key,
            layers: LayersString,
            format: "image/png",
            transparent: true,
            attribution: "myattribution",
          }}
          eventHandlers={{
            click: async (event) => {
              const data = await getFeatureInfo(event)
              setCardData(data.features[0].properties)
              setProps(data.features[0].properties)
            }
          }}
        />

        <WMSTileLayer
          styles=""
          crossOrigin="anonymous"
          key={key}
          url="http://62.113.107.81:8081/geoserver/department/wms"
          layers={LayersString}
          format="image/png"
          transparent={true}
          version="1.1.0"
          attribution="myattribution"
          
        />
      </MapContainer>
      {isMobileScreen && <SideSheetsModal from="bottom">
        <LayerSelector/>
      </SideSheetsModal>}
    </>
  )
}

export default LeafletMap
