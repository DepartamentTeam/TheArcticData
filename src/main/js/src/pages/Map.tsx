import { useState, useRef, Suspense, lazy, createContext } from "react"
import { Sceleton } from "../enteties/Sceleton/Sceleton"
import { Select } from "../enteties/Select/Select"
import { Card } from "../enteties/Card"
export type MapDataProps = {
	org_code: string
	org_name: string
	form_code: string
	form_name: string
	dep_code: string
	dep_name: string
	tel: string
	med_type: string
	med_profile: string
	region: string
	address: string
	latitude: string
	longitude: string
	city?: string
	population?: number
}

const MapLazy = lazy(() => import("../enteties/Map"))
interface MapContextProps {
	centerPosition: number[]
	setCenterPosition: (value: number[]) => void
}

export const MapContext = createContext<MapContextProps>({
	centerPosition: [68.970663, 33.074918],
	setCenterPosition: (value: number[]) => {},
})

export function PageMap() {

	const [hoverInfo, setHoverInfo] = useState<any>()
	const [jsonData, setJsonData] = useState()
	const [isfile, setIsFile] = useState(null)
	const [error, setError] = useState(false)
	const filePicker = useRef(null)
	
	const [centerPosition, setCenterPosition] = useState([68.970663, 33.074918])
	const handleFileChange = (event) => {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			try {
				const geoJson = JSON.parse(
					typeof reader.result === "string" ? reader.result : ""
				)
				setJsonData(geoJson)
				setIsFile(true)
			} catch (error) {
				setError(true)
				console.error("Ошибка при преобразовании файла:", error)
			}
		}

		if (file) {
			reader.readAsText(file)
		}
	}
	
	const handleReset = () => {
		setJsonData(null)
		setIsFile(false)
	}

	const handlePick = (event: React.MouseEvent) => {
		event.preventDefault()

		filePicker.current.click()
	}

	return (
		<MapContext.Provider value={{ centerPosition, setCenterPosition }}>
			<div className="layout">
				<div className="header">
					<div className="title-container">
						<h1>🛠️Map Tool</h1>
						{!error ? (
							<label>Прикрепить GeoJson</label>
						) : (
							<label className="error">
								Ошибка при преобразовании файла
							</label>
						)}
						<div className="buttons-container">
							<button
								className="file-picker"
								onClick={handlePick}
							>
								{isfile ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4.5 12.75l6 6 9-13.5"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
										/>
									</svg>
								)}
							</button>
							<input
								ref={filePicker}
								type="file"
								accept=".geojson"
								onChange={handleFileChange}
							/>

							<button onClick={handleReset}>Очистить</button>
							<Select />
						</div>
					</div>
					{hoverInfo ? (
						<Card data={hoverInfo}/>
					) : (
						<div className="card">
							<Sceleton />
						</div>
					)}
				</div>
				<div className="map">
				<Suspense fallback={<Sceleton />}>
					<MapLazy handler={setHoverInfo} data={jsonData} />
				</Suspense>
				</div>
			</div>
		</MapContext.Provider>
	)
}
