"use client"
import { phone, pulse_icon } from "@/shared/assets/icons"
import {
  emergency_icon,
  med_cros_icon,
  population_icon,
  time_icon,
} from "./icons"
import { SideSheetsModal } from "../SideSheetModal"
import {
  ThousandsSeparator,
  RoundFloat,
  TimeCoverter,
  getColorByLetter,
  getColorByRating,
} from "./lib/utils"
import type { ICardData } from "@/shared/models"
import { FC } from "react"

interface IMapCardProps {
  props?: any
}

interface Props {
  props: Partial<ICardData>
}

export const MapCard: FC<Props> = ({ props }) => {
  const theme = window?.localStorage.getItem("mapTheme")
  const recommendationsArr = props?.recommendations?.split(".")

  console.log(props)
  return (
    <>
      <div className="map-card">
        <div className={`map-card__container ${theme}`}>
          {props?.settlement && (
            <h2 className={`map-card__title rating `}>
              {props?.type!.replace("_", " ")}. {props?.settlement}{" "}
              {props?.name}
            </h2>
          )}
          {props?.district && (
            <h2 className={`map-card__title rating `}>{props?.district}</h2>
          )}

          <div className="flex-row-container">
            {props?.iden_integral_rate_access && (
              <div className="flex-row-container">
                <span
                  className={` map-card__rating-lg ${getColorByRating(
                    RoundFloat(props?.iden_integral_rate_access)
                  )}`}
                >
                  {RoundFloat(props?.iden_integral_rate_access)}
                </span>
                <strong>Общий рейтинг</strong>
              </div>
            )}
            {props?.itog_letters_group && (
              <>
                {" "}
                <div
                  className={` chip-rating  ${getColorByLetter(
                    props?.itog_letters_group
                  )}`}
                >
                  {" "}
                  <h5
                    className={` map-card__rating-lg ${getColorByLetter(
                      props?.itog_letters_group
                    )}`}
                  >
                    {props.itog_letters_group}
                  </h5>
                </div>
              </>
            )}
          </div>

          {props?.population && props?.population !== 0 ? (
            <div className="flex-row-container icon-default">
              {population_icon}
              <strong>Население:</strong>{" "}
              <span className="body-1">
                {ThousandsSeparator(props?.population)}
              </span>
            </div>
          ) : (
            <></>
          )}

          {props?.nearest_hospital_distance &&
            props?.nearest_hospital_duration && (
              <>
                <div className="flex-row-container icon-default">
                  {med_cros_icon}
                  <strong>Ближайшая больница в</strong>

                  <span className="body-1">
                    {RoundFloat(props?.nearest_hospital_distance)} км{" "}
                  </span>
                </div>
                <div className="flex-row-container icon-default">
                  {time_icon}
                  <strong>Время в пути составит</strong>{" "}
                  <span className="body-1">
                    ~{" "}
                    {TimeCoverter(
                      RoundFloat(props?.nearest_hospital_duration!)
                    )}{" "}
                  </span>
                </div>
              </>
            )}

          {props?.org_name && (
            <h5>
              {props.org_name} {props.dep_name}
            </h5>
          )}
          {props?.has_emergency && props?.has_emergency !== 0 ? (
            <div className="flex-row-container icon-default green">
              {emergency_icon}
              <strong>Скорая помощь: </strong>
              <span className="small-2">Есть</span>
            </div>
          ) : (
            <></>
          )}
          {props?.med_level && (
            <div className="flex-row-container">
              {" "}
              <strong>Вид помощи:</strong>
              <span className="body-1">{props.med_level}</span>
            </div>
          )}

          {props?.owner && (
            <div className="flex-row-container">
              {" "}
              <strong>Собственность:</strong>
              <span className="body-1">{props?.owner}</span>
            </div>
          )}

          {props?.okrug && <span className="subtitle-1">{props?.okrug}</span>}

          {props?.hospital_stats &&
            props?.hospital_stats
              .split("\n")
              .map((h, idx) => <span> {h} </span>)}
        </div>

        {recommendationsArr && (
          <SideSheetsModal from="right">
            <ol className="body-1">
              {recommendationsArr
                ?.splice(1, recommendationsArr.length)
                .map((rec, idx) => (
                  <li key={idx}>{rec.replace(`${idx + 2}`, " ")}</li>
                ))}
            </ol>
          </SideSheetsModal>
        )}
      </div>
    </>
  )
}
