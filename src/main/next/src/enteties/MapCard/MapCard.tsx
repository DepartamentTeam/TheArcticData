
import { cp } from 'fs'
import { med_bed, population } from './icons'
export const MapCard = ({ props }: { props: any }) => {
  const str = "mun_obr_arctic_with_rate Sheet1_itog_letters"
  const ratingLetterColor = props["mun_obr_arctic_with_rate Sheet1_itog_letters"]
 
 

  return (
    <div className="map-card">
      <div className="map-card__container">
        {props?.region && <h1  className={`map-card__title rating-} `}>{props["mun_obr_arctic_with_rate Sheet1_itog_letters"]}</h1>}
        {props?.District && (
          <span className="card-title">{props?.District}</span>
        )}
        {props?.okrug && <span className="card__title">{props?.okrug}</span>}
        {props?.name && <span className="card-title">{props?.name}</span>}
        <div className="map-card__col">
        {med_bed}
          <strong className="subtitle-1">Койки:</strong>
          <span className="small-1">{props?.count_bad}</span>
        </div>
        <div id="population" className="map-card__col">
          {population}
          <strong className="subtitle-1">Население:</strong>
          <span className="small-1">{props?.people}</span>
        </div>
      </div>
    </div>
  )
}
