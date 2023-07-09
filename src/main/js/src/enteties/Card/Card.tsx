


export const Card = ({data }: {data: any}) => {
    return (
        <div className="card">
        <strong>Долгота:</strong>{" "}
        {data.feature.properties.Longitude}
        <strong>Широта:</strong>{" "}
        {data.feature.properties.Latitude}
        <hr />
        <h3>
            {data.feature.properties.city}
        </h3>{" "}
        <strong>Население:</strong>{" "}
        {data.feature.properties.population}
        <hr />
        <ul>
            <li>
                <strong>Телефон: </strong>{" "}
                {data.feature.properties.tel}
            </li>{" "}
            <br />
            <li>
                <strong>Адресс: </strong>{" "}
                {data.feature.properties.address}
            </li>
            <li>
                <strong>Медптип:</strong>{" "}
                {data.feature.properties.med_type}
            </li>
            <li>
                <strong>Медпрофиль:</strong>{" "}
                {data.feature.properties.med_profile}
            </li>
        </ul>
        <ul>
            <li>
                <strong>Код:</strong>{" "}
                {data.feature.properties.org_code}
            </li>{" "}
            <br />
            <li>
                <strong>Название:</strong>{" "}
                {data.feature.properties.org_name}
            </li>
        </ul>
        <ul>
            <li>
                <strong>Код: </strong>
                {data.feature.properties.form_code}
            </li>{" "}
            <br />
            <li>
                <strong>Название: </strong>{" "}
                {data.feature.properties.form_name}
            </li>
        </ul>
    </div>
    )
} 