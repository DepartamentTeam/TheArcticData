"use client"
import { useState, useEffect } from "react"
import { MapContainer, TileLayer, WMSTileLayer, GeoJSON } from "react-leaflet"
import { InfoWMSTileLayer } from "react-leaflet-infowms"
import type { MapOptions } from "leaflet"
import { MapCard } from "@/enteties/MapCard"
import { dark_map, light_map, generateKey, getFeatureInfo } from "../lib"
import { useSecondaryMapCardStore, useStore } from "@/shared/store/store"
import ColorLegend from "./ColorLegend"
import useMediaQuery from "@/shared/lib/useMediaQuery"
import { SideSheetsModal } from "@/enteties/SideSheetModal"
import { LayerSelector } from "./LayersSelector"
import type { ICardData } from "@/shared/models"
import { InfoWMSNoTiledLayer } from "./NoTiledLayer"

export const LeafletMap = () => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  const [key, setNewKey] = useState<string>()
  const [cardData, setCardData] = useState<Partial<ICardData> | null>()
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
    if (
      cardData?.settlement !== undefined &&
      typeof cardData?.id === "number"
    ) {
      setKeyRoadGeoJson(generateKey())
      handelGetGeoJSON(cardData?.id)
    }
    if (cardData === undefined) {
      setCardData(null)
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

  const theme = window.localStorage.getItem("mapTheme")

  return (
    <>
      {cardData && <MapCard props={cardData} />}
      <MapContainer
        tap={true}
        doubleClickZoom={false}
        className="map-tiles"
        dragging
        id="map-container"
        {...viewState}
        minZoom={3}
      >
        {(cardData?.itog_letters_group ||
          cardData?.iden_integral_rate_access) && <ColorLegend />}
        {roadGeoJSON && <GeoJSON key={keyRoadGeoJson} data={roadGeoJSON} />}

        <TileLayer
          attribution={
            theme === "dark" ? dark_map.attribution : light_map.attribution
          }
          url={theme === "dark" ? dark_map.url : light_map.url}
        />
        <InfoWMSNoTiledLayer
          key={key}
          url="http://62.113.107.81:8081/geoserver/department/wms"
          params={{
            key: key,
            layers: LayersString, // имя слоя на Geoserver
            format: "image/png",
            transparent: true,
            version: "1.1.0",
            attribution: "myattribution",
          }}
        />
        <InfoWMSTileLayer
          id="infoWMSTileLayer"
          key={`${key}-info`}
          crossOrigin="anonymous"
          zIndex={20}
          url="http://62.113.107.81:8081/geoserver/department/wms"
          params={{
            version: "1.1.0",
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
              if (!data.features[0]) {
                setCardData(null)
                setProps(null)
              }
              if (data.features[0]?.properties !== undefined) {
                setCardData(data.features[0]?.properties)
                setProps(data.features[0]?.properties)
              }
            },
          }}
        />
      </MapContainer>
      {isMobileScreen && (
        <SideSheetsModal from="bottom">
          <LayerSelector />
        </SideSheetsModal>
      )}
    </>
  )
}

export default LeafletMap
