import { LayersControl } from "react-leaflet"
import { getSourceMapRange } from "typescript"
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
  clearLayers: () => void
}

export const useStore = create<IStore>()((set) => ({
  layers: ["department:districts"],
  addLayer: (addLayer: string) =>
    set((state) => ({
      layers: addLayer.value !== "" ? [addLayer, ...state.layers] : null,
    })),
  removeLayer: (removeLayer: string) =>
    set((state: any) => ({
      layers: state.layers.filter((layer: string) => layer !== removeLayer),
    })),
    clearLayers: () => set((state) => ({layers: []}))
}))
interface ICheckbox {
  checked: boolean
  setIsChecked: (checked: boolean) => void
}

export const useCheckboxStore =  create<ICheckbox>()((set) => ({
  checked: false,
  setIsChecked: (checked) => set({checked})


}))



interface IMapTheme {
  theme: "light" | "dark" 
  setMapTheme: (theme: string) => void

}

export const useMapThemeStore = create<IMapTheme>()((set) => ({
  theme: "light",
  setMapTheme: (theme: string) => set({theme: theme})

}))
interface ISecondaryMapCard {
  props: any 
  setProps: (props: any) => void

}

export const useSecondaryMapCardStore = create<ISecondaryMapCard>()((set) => ({ 
  props: undefined,
  setProps: (props: any) => set({props: props})
}))

