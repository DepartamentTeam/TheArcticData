import { useContext } from "react"
import { MapContext } from "../../pages/Map"

const CoordinatesConfig = [
	{
		id: 1,
		label: "Мурманск",

		position: "68.970663, 33.074918",
	},
	{
		id: 2,
		label: "Полярный",

		position: "69.197402, 33.437235",
	},
	{
		id:3,
		label: "Архангельск",
		position: "64.539911, 40.515762"
	}
]

export const Select = () => {
	const { setCenterPosition } = useContext(MapContext)

	const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		setCenterPosition(selectedValue.split(",").map((s) => parseFloat(s)))
	}

	return (
		<select onChange={handleDropdownChange}>
			{CoordinatesConfig.map((obj) => (
				<option key={obj.id} value={obj.position}>
					{" "}
					{obj.label}{" "}
				</option>
			))}
		</select>
	)
}
