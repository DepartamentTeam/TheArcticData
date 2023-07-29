"use client"
import { phone, pulse_icon } from "@/shared/assets/icons"
import { ambulance_car, big_hospital, emergency_icon, med_bed, med_cros_icon, population, population_icon, time_icon } from "./icons"
import { home } from "@/widget/Sidebar/icons"
import { Popover } from "../Popover/Popover"
import { useMapThemeStore } from "@/shared/store/store"
import { SideSheetsModal } from "../SideSheetModal"

export const RoundFloat = (n: number) => {
  return Math.round(n)
}

const hospitalsIcons = ["", big_hospital, ambulance_car]
const getColorByRating = (n: number): string => {
  let color = ""
  if (n < 30) {
    color = "red"
  } else if (n < 50) {
    color = "yellow"
  } else if (n < 100) {
    color = "green"
  }
  return color
}

const getColorByLetter = (n: string): string => {
  let color = ""
  if (n === "D") {
    color = "red"
  } else if (n === "C" || n === "C+") {
    color = "orange"
  } else if (n === "B" || n === "B+") {
    color = "yellow"
  } else if (n === "A") {
    color = "green"
  }
  return color
}

export const MapCard = ({ props }: { props: any }) => {
  const str = "mun_obr_arctic_with_rate Sheet1_itog_letters"
  const ratingLetterColor =
    props["mun_obr_arctic_with_rate Sheet1_itog_letters"]
  const { theme } = useMapThemeStore()
  const recommendationsArr = props?.recommendations?.split(".")
  console.log(props)
  return (
    <>
      <div className="map-card">
        <div className={`map-card__container ${theme}`}>

       
          

          {props?.type && <h2 className={`map-card__title rating `}>
          {props?.type} {props?.settlement} {props.name}
        </h2>}
        
          <div className="flex-row-container" >
          
          { props?.itog_letters_group&& (
            <div className="flex-row-container" >
              
              <span
                className={` map-card__rating-lg ${getColorByRating(
                  RoundFloat(props.iden_integral_rate_access)
                )}`}
              >
              
              {props.itog_letters_group}
               
              </span>
              
            </div>
          )} 
          {props?.iden_integral_rate_access && (
            <> <strong>Общий рейтинг</strong>
          <div
            className={` chip-rating  ${getColorByRating(
              RoundFloat(props.iden_integral_rate_access)
            )}`}
          > {pulse_icon} 
            
              <h5
                className={` map-card__rating-lg ${getColorByLetter(
                  props.itog_letters_group
                )}`}
              >
                
                {RoundFloat(props.iden_integral_rate_access)}
              </h5>
              
          </div>
          </>
          )}
          </div>
         
          {props?.population && props?.population !== 0 ?  (<div className="flex-row-container icon-default">
              {population_icon}
              <strong>Население:</strong>{props?.population}
              </div>
          ) : <></>}
         
          {props?.nearest_hospital_distance && (
            <>
             <div className="flex-row-container icon-default">
             {med_cros_icon}
             <strong>Ближайшая больница в</strong>{RoundFloat(props?.nearest_hospital_distance)} км
             
            
             </div>
             <div className="flex-row-container icon-default">
             {time_icon}
             <strong>время в пути составит</strong> ~ {RoundFloat(props?.nearest_hospital_duration)} мин 
              </div>
             </>
          )}

          {props?.region && (
            <h1 className={`map-card__title rating-} `}>
              {props["mun_obr_arctic_with_rate Sheet1_itog_letters"]}
            </h1>
          )}
          
          {props?.org_name && (
            <>
              <span className="small-2">
                {props.org_name} {props.dep_name}
              </span>
            </>
          )}
           {props?.has_emergency && props?.has_emergency !== 0 ? (
            <div className="flex-row-container icon-default green">
             {emergency_icon}
             <strong>Скорая помощь: </strong>
            <span className="small-2">Есть</span>
            </div>
          ) : <></>}
          {props?.med_level && (
            <div className="flex-row-container">
            {" "}
            <strong>Вид помощи:</strong>
            <span className="small-2">{props.med_level}</span>
            </div>
          )}
         
        
          {props?.owner && (
             <div className="flex-row-container">
             {" "}
             <strong>Собственность:</strong>
             <span className="small-2">{props?.owner}</span>
             </div>
          )}
          

          
          {props?.okrug && <span className="card__title">{props?.okrug}</span>}

          {props?.count_bad && (
            <div className="map-card__col">
              {med_bed}
              <strong className="subtitle-1">Койки:</strong>
              <span className="small-1">{props?.count_bad}</span>
            </div>
          )}
          {props?.hospital_stats &&
            props?.hospital_stats
              .split("\n")
              .map((h, idx) => <span> {h} </span>)}
        </div>
        { recommendationsArr && <SideSheetsModal>
          <ol className="body1">
            {recommendationsArr?.splice(1, recommendationsArr.length)
              .map((rec, idx) => (
                <li key={idx}>{rec.replace(`${idx + 2}`, " ")}</li>
              ))}
          </ol>
        </SideSheetsModal>}
      </div>
     
    </>
  )
}
