"use client"

import { layers_icons } from "@/shared/assets/icons"
import { useStore } from "@/shared/store/store"
import Chip from "@/shared/ui/Chip/Chip"

const LAYERS_OPTIONS = [
  //{
  //  id: 1,
  //  label: "Архангельская область",
 //   value: "arhangelskaya_oblast",
 // },
  //{
  //  id: 2,
 //   label: "base_obl_people",
 //   value: "base_obl_people",
 // },
 // {
//    id: 3,
 //   label: "base_obl_people_3000",
 //   value: "base_obl_people_3000",
 // },
 {
  id: 1,
  label: "Районы",
  value: "districts"
},
  //{
  //  id: 4,
 //   label: "Больничные койки",
//    value: "mun_obr_all_bad zak_arctic_mun_obr_all_bad",
// },
 // {
 //   id: 5,
 //   label: "Муниципальные образования",
 //   value: "mun_obr_arctic",
 // },
 {
  id: 2,
  label: "Населенные пункты",
  value: "settlements"
 
},
  {
    id: 3,
    label: "Медицинские Объекты",
    value: "hospitals",
  },

  {
    id: 7,
    label: "Общий рейтинг доступности по районам",
    value: "districts_result",
  },
  {
    id: 8,
    label: "Рейтинг территориальной доступности населенных пунктов",
    value: "settlements_result",
  },
  //{
  //  id: 8,
  //  label: "Медленные дороги",
 //   value: "slow_roads_lines arctic_slow_roads_lines",
 // },
  //{
   // id: 9,
   // label: "Автограф Архангельская область",
  //  value: "auto_foot_graph_arh_obl",
 // },
  
 // {
  //  id: 11,
  //  label: "Больницы",
 //   value: "hospitals"
 // },
  
  {
    id: 13, 
    label: "Маршруты до медицинских организаций",
    value: "settl_hosp_nearest_routes"
  }
]

export const LayerSelector = () => {

  const removeLayer = useStore((state) => state.removeLayer)
  const addLayer = useStore((state) => state.addLayer)
  const clearLayers = useStore((state) => state.clearLayers)
 

  return (
    <div className="tooltips-bar__map">
            <span className="tooltips-bar__map-title subtitle-1">{layers_icons}Слои
            <button className="btn btn--secondary btn--text"
          onClick={clearLayers}>
            Очистить
          </button>
            </span>
          <ul>
            {LAYERS_OPTIONS.slice(0, 7).map((obj) => (
              <li key={obj.id}>
              
                <Chip id={obj.id} addHandler={addLayer}
                  removeHandler={removeLayer} label={obj.label}
                  value={`department:${obj.value}`} />
              </li>
            ))}
          </ul>
        
    </div>
  )
}
