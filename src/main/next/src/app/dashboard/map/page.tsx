
import { MapCard } from "@/enteties/MapCard/MapCard";
import { SecondaryMapCard } from "@/enteties/MapCard/SecondaryMapCard";
import { LayerSelector } from "@/widget/LeafletMap/LayersSelector";

import { Metadata } from "next";
import dynamic from "next/dynamic"

const MapWithNoSSR = dynamic(() => import('@/widget/LeafletMap/LeafletMap'), {
  ssr: false
});

const OnBoardNoSSR = dynamic(() => import("@/widget/OnBoard/OnBoard"), {
  ssr: false
});
export const metadata : Metadata = {
  title: "Карта",
  icons: ["/icons/map.ico"]
}

export default function MapsPage() {
 

  return (
    <section className="pg-dashboard-container">
      <div className="pg-map lg-row">
      <MapWithNoSSR />
      </div>
      <div className="sm-col  pg-map-toolbar">
        <SecondaryMapCard/>
        <LayerSelector/></div>
        <OnBoardNoSSR/>
    </section>
  )
}
