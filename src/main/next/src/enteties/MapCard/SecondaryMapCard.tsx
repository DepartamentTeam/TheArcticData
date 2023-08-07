"use client"
import { useSecondaryMapCardStore } from "@/shared/store/store"
import { RoundFloat } from "./lib/utils"
import Link from "next/link"
import { phone } from "@/shared/assets/icons"
import { home } from "@/widget/Sidebar/icons"



export const SecondaryMapCard = () => {
  const { props } = useSecondaryMapCardStore()
  return (
    <section className="map-card--secondary">
    {(props && typeof props !== null )  && <div className="map-card--secondary__container">
      
      {props?.iden_access_100 &&  
      props?.iden_access_100 < 1
      ? (
        <div className="map-card__col">
          {" "}
          <strong>{RoundFloat(props?.iden_access_100)}</strong>
          <span className="small-1">
            Рейтинг доступности по{" "}
            <Link
              className="a small-1"
              href="/dashboard/analytics#Рейтинг доступности по дополнительным критериям"
            >
              дополнительным критериям
            </Link>{" "}
          </span>{" "}
        </div>
      ) : <></>}

      {props?.iden_incidence_100 && props?.iden_incidence_100 !== 0 ? (
        <div className="map-card__col">
          {" "}
          <strong>{RoundFloat(props?.iden_incidence_100)}</strong>
          <span className="small-1">
            Рейтинг{" "}
            <Link
              className="small-1 a"
              href="/dashboard/analytics#Рейтинг доступности по заболеваемости"
            >
              заболеваемости
            </Link>{" "}
          </span>{" "}
        </div>
      ) : <></>}
      {props?.integral_rate_ter_access &&  
      props?.integral_rate_ter_access !==  (0 || null)
      
      ? (
        <div className="map-card__col">
          {" "}
          <strong>{RoundFloat(props?.integral_rate_ter_access)}</strong>
          <span className="small-1">
            <Link
              className="a small-1"
              href="/dashboard/analytics#Интегральный рейтинг доступности (ИРД)"
            >
              Интегральный рейтинг
            </Link>{" "}
            территориальной доступности (равные веса)
          </span>{" "}
        </div>
      )  : <></>}
      {props?.rate_ter_access_duration &&
       props?.rate_ter_access_duration !== (0 || null)
     
       ? (
            <div className="map-card__col">
              <strong>{RoundFloat(props?.rate_ter_access_duration)}</strong>
              <span className="small-1">Рейтинг территориальной доступности по времени</span>
            </div>
          ) : <></>}
      {props?.rate_ter_access_distance 
      &&  
      props?.rate_ter_access_distance !== (0 || null)
     
      ?(
            <div className="map-card__col">
              <strong>{RoundFloat(props?.rate_ter_access_distance)}</strong>
              <span className="small-1">Рейтинг территориальной доступности по дистанции</span>
            </div>
          ) : <></> }
          {
          props?.iden_integral_rate_ter_access 
          && 
          props?.iden_integral_rate_ter_access !== 0 ? (
          <div className="map-card__col">
            {" "}
            <strong>
              {RoundFloat(
                props?.iden_integral_rate_ter_access
              )}
            </strong>
            <span className="small-1">
              <Link
                className="a small-1"
                href="/analytics#Интегральный рейтинг доступности (ИРД)"
              >
                Интегральный рейтинг
              </Link>{" "}
              территориальной доступности (равные веса)
            </span>{" "}
          </div>
        ) : <></>}
 {props?.address && (
        <div className="map-card__col">
          {" "}
          {home}
          <span className="small-2">{props?.address}</span>
         
        </div>
      )}
      {props?.tel && (
        <div className="map-card__col">
          {" "}
          {phone}
          <span className="small-1">{props?.tel}</span>
        </div>
      )}

     
    </div>}
    </section>
  )
}
