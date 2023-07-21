"use client"
import { useState, useCallback, useEffect } from "react"
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from "react-leaflet"

import { InfoWMSTileLayer } from "react-leaflet-infowms"
import type { MapOptions } from "leaflet"
import { MapCard } from "../../enteties/MapCard/MapCard"
import { Select } from "@/shared/ui/Select"
import { nanoid } from "nanoid"
import ky from "ky"
import { Menu } from "@/enteties/Menu/Menu"
import { Popover } from "@/enteties/Popover/Popover"
import { CheckboxComponent } from "@/shared/ui/Checkbox"
import { LayerSelector } from "./LayersSelector"
import { useStore } from "@/shared/store/store"

interface ILeafletMap {
  layer: string
}



export const LeafletMap = () => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const [key, setNewKey] = useState<string>()
  const [cardData, setCardData] = useState()
 async function wmsInfo(event) {
    console.log("Ky event", event.url)
    await ky
      .get(event.url).json().then((res) => setCardData(res.features[0].properties))
  }

  const [layer, setLayer] = useState<string>("auto_foot_graph_arh_obl")
  const Layers = useStore().layers

  const LayersString = Layers.join(",")
  console.log("Layer string ", LayersString)
  useEffect(() => {
    let key = nanoid(4).toString()
    setNewKey(key)
  }, [layer,LayersString])
  const [viewState, setViewState] = useState<MapOptions>({
    center: { lat: 66, lng: 33 },
    zoom: 5,
  })
  const [data, setData] = useState()
 
  const onHover = useCallback((event: any) => {
    const {
      features,
      point: { x, y },
    } = event
    const hoveredFeature = features && features[0]
    setCardData(hoveredFeature && { feature: hoveredFeature, x, y })
  }, [])
  const handleClick = (feature: any) => {
    console.log("click")
    setCardData(feature.properties)
  }
  const handleMergeLayer = (val: any) => {
   let query = layer !== "" ? `department:${val.trim()}`: "" 

    setLayer(`${query},${layer !== "" ? layer : null}`)
  }
  console.log("Layer" + layer)
  console.log("Card Data", cardData)
  return (
    <>  <LayerSelector/>
        <MapContainer className="map-tiles"   dragging id="map-container" {...viewState} minZoom={3} >
        
        {cardData && <MapCard props={cardData} />}
        <TileLayer
        
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <InfoWMSTileLayer
      
          key={`${key}-info`}
          url="http://62.113.107.81:8081/geoserver/department/wms"
          params={{
            Request: "GetFeatureInfo",
            key: key,
            layers: LayersString,
            format: "image/png",
            transparent: true,
            attribution: "myattribution",
          }}
          eventHandlers={{ 
             click: (event) => wmsInfo(event) }}
        />
   <WMSTileLayer

          crossOrigin=""
          key={key}
          url="http://62.113.107.81:8081/geoserver/department/wms"
          layers={LayersString}
          format="image/png"
          transparent={true}
          version="1.1.0"
          attribution="myattribution"
          
        />
      
       
   
      </MapContainer>
    </>
  )
}

export default LeafletMap
