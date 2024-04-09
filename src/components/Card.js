import React from "react"
import { Link } from "react-router-dom";

const Card = ({ country }) => {
  const linkurl=`/country/${country.name.common}`
  return (
    <div className="card">
        
        <Link to={linkurl} >
          <div className="card-img">
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="card-body">
            <h2>{country.name.common}</h2>
            <p>Population: {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </Link>
    </div>
  )
}

export default Card
