import type { LayerProps } from "react-map-gl"

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const areaLayer: LayerProps = {
	id: "data",
	type: "fill",
	source: "data",
	paint: {
		"fill-color": "#3288bd",
	},
}

export const pointLayer: LayerProps = {
	id: "data",
	type: "circle",
	source: "data",
	paint: {
		"circle-color": "#4E3FC8",
	},
}
