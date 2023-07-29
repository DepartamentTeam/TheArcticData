import React, {
	useCallback,
	useState,
	useMemo,
	useContext,
	useEffect,
} from "react"
import Map, {
	Source,
	Layer,
	Marker,
	GeolocateControl,
	NavigationControl,
	ScaleControl,
	FullscreenControl,
	Popup,
} from "react-map-gl"

import { areaLayer, pointLayer } from "./mapstyle"
import { MapContext } from "../../pages/Map"


type MapProps = {
	zoom?: [number]
	center?: [number, number]
	style?: string
	interactive?: boolean
	pitch?: number
	bearing?: number
	data: any
	handler?: any
}

type DetailsProps = {
	summary: string
	content: React.ReactNode
}

export const Details = ({ summary, content }: DetailsProps) => {
	return (
		<details>
			<summary>{summary}</summary>
			{content}
		</details>
	)
}

export const MapComponent: React.FC<MapProps> = ({
	data,
	handler
}: Partial<MapProps>) => {
	const { centerPosition } = useContext(MapContext)
	const [hoverInfo, setHoverInfo] = useState(null)
	const token = import.meta.env.VITE_API_TOKEN
	const [selectedPoint] = useState(null)

	const onHover = useCallback((event) => {
		const {
			features,
			point: { x, y },
		} = event
		const hoveredFeature = features && features[0]
		setHoverInfo(hoveredFeature && { feature: hoveredFeature, x, y })
	}, [])

	useMemo(() => {
		handler(hoverInfo)
	}, [hoverInfo, selectedPoint])

	const [viewState, setViewState] = React.useState({
		latitude: centerPosition[0],
		longitude: centerPosition[1],
	})

	useEffect(() => {
		setViewState({
			latitude: centerPosition[0],
			longitude: centerPosition[1],
		})
	}, [centerPosition])

	return (
		<Map
			{...viewState}
			style={{
				height: "100%",
				width: "100%",
			}}
			
			latitude={viewState.latitude}
			longitude={viewState.longitude}
			initialViewState={{
				latitude: centerPosition[0],
				longitude: centerPosition[1],
				zoom: 5,
			}}
			interactiveLayerIds={["data"]}
			mapStyle="mapbox://styles/emelyanovkonstantin/clitiga9m00bo01qyahojah61"
			mapboxAccessToken="pk.eyJ1IjoiZW1lbHlhbm92a29uc3RhbnRpbiIsImEiOiJjbGl3OHVhM3kwOXk2M2ptZ2w3eDJjOHk5In0.NI5D6DkjQI7iYfaP9ibnKw"
			onMove={(evt) => setViewState(evt.viewState)}
			onClick={onHover}
		>
			<GeolocateControl position="top-left"/>
			<NavigationControl position="top-left"/>
			<FullscreenControl position="top-right"/>
			<ScaleControl position="top-right"/>
			{data && (
				<>
					<Source cluster={true} id="data" type="geojson" data={data}>
						<Layer {...pointLayer} />
						<Layer {...areaLayer} />
					</Source>
				</>
			)}
			{hoverInfo && (
				<div
					className="tooltip"
					style={{ left: hoverInfo.x, top: hoverInfo.y }}
				>
					<Details
						summary="Основная информация"
						content={
							<ul>
								<li>
									Телефон: {hoverInfo.feature.properties.tel}
								</li>{" "}
								<br />
								<li>
									Адресс:{" "}
									{hoverInfo.feature.properties.address}
								</li>
								<li>
									Медптип:{" "}
									{hoverInfo.feature.properties.med_type}
								</li>
								<li>
									Медпрофиль:{" "}
									{hoverInfo.feature.properties.med_profile}
								</li>
							</ul>
						}
					/>
					<Details
						summary="Организация"
						content={
							<ul>
								<li>
									Код:{hoverInfo.feature.properties.org_code}
								</li>{" "}
								<br />
								<li>
									Название:{" "}
									{hoverInfo.feature.properties.org_name}
								</li>
							</ul>
						}
					/>
					<Details
						summary="Полное наименование"
						content={
							<ul>
								<li>
									Код:{hoverInfo.feature.properties.form_code}
								</li>{" "}
								<br />
								<li>
									Название:{" "}
									{hoverInfo.feature.properties.form_name}
								</li>
							</ul>
						}
					/>
				</div>
			)}
		</Map>
	)
}
