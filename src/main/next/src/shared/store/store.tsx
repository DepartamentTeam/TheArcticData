import { LayersControl } from "react-leaflet"
import { create } from "zustand"

export type TLayer = {
  id: number
  label: string
  value: string
}

interface IStore {
  layers: string[]
  addLayer: any
  removeLayer: any
}

export const useStore = create<IStore>()((set) => ({
  layers: [],
  addLayer: (addLayer: string) =>
    set((state) => ({
      layers: addLayer.value !== "" ? [addLayer, ...state.layers] : null,
    })),
  removeLayer: (removeLayer: string) =>
    set((state: any) => ({
      layers: state.layers.filter((layer: string) => layer !== removeLayer),
    }))
}))
