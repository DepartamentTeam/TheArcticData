
import { Metadata } from "next";
import dynamic from "next/dynamic"

const MapWithNoSSR = dynamic(() => import('@/widget/LeafletMap/LeafletMap'), {
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
    </section>
  )
}
