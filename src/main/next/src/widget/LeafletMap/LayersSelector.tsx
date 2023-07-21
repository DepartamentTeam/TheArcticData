import { SideSheetsModal } from "@/enteties/SideSheetModal"
import { useStore, TLayer } from "@/shared/store/store"
import Chip from "@/shared/ui/Chip/Chip"
import { useState } from "react"
const LAYERS_OPTIONS = [
  {
    id: 1,
    label: "Архангельская область",
    value: "arhangelskaya_oblast",
  },
  {
    id: 2,
    label: "base_obl_people",
    value: "base_obl_people",
  },
  {
    id: 3,
    label: "base_obl_people_3000",
    value: "base_obl_people_3000",
  },
  {
    id: 4,
    label: "Больничные койки",
    value: "mun_obr_all_bad zak_arctic_mun_obr_all_bad",
  },
  {
    id: 5,
    label: "Муниципальные образования",
    value: "mun_obr_arctic",
  },
  {
    id: 6,
    label: "Медицинские Объекты",
    value: "objects_zdrav objects_zdrav_2",
  },
  {
    id: 7,
    label: "Результат",
    value: "result",
  },
  {
    id: 8,
    label: "Медленные дороги",
    value: "slow_roads_lines arctic_slow_roads_lines",
  },
  {
    id: 9,
    label: "Автограф Архангельская область",
    value: "auto_foot_graph_arh_obl",
  },
  {
    id: 10,
    label: "Населенные пункты",
    value: "settlements"
   
  },
  {
    id: 11,
    label: "Больницы",
    value: "hospitals"
  },
  {
    id: 12,
    label: "Районы",
    value: "districts"
  }
]

export const LayerSelector = () => {
  const layers = useStore((state: any) => state.layers)
  const removeLayer = useStore((state) => state.removeLayer)
  const addLayer = useStore((state) => state.addLayer)
  const [isChcked, setIsChecked] = useState(false)

  return (
    <section className="tooltips-bar__map-container">
      <div className="tooltips-bar__map">
            <SideSheetsModal onSave={addLayer}>
            <span className="small-1">Район</span>
          <hr className="divider"></hr>
          <ul>
            {LAYERS_OPTIONS.slice(0, 7).map((obj) => (
              <li key={obj.id}>
              
                <Chip  addHandler={addLayer}
                  removeHandler={removeLayer} label={obj.label}
                  value={`department:${obj.value}`} />
              </li>
            ))}
          </ul>
          <span className="small-1">Дороги</span>
          <hr className="divider"></hr>
          <ul>
            {LAYERS_OPTIONS.slice(7, LAYERS_OPTIONS.length).map((obj) => (
              <li key={obj.id}>
               <Chip  label={obj.label}
                  addHandler={addLayer}
                  removeHandler={removeLayer}
                  value={`department:${obj.value}`} />
              </li>
            ))}
          </ul>
              </SideSheetsModal>
      </div>
    </section>
  )
}
