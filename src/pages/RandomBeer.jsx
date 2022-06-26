import { React, useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import { Link } from "react-router-dom"

const RandomBeer = () => {
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        console.log("responseData", response.data)
        setBeer(response.data)
      })
  }, [])

  if (!beer) {
    return (
      <div>
        <Header />
        <p>Loading ...</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="BeerContainer">
        <img className="singleBeerImage" alt="" src={beer.image_url} />
        <div className="beerSingleInfo">
          <h2>
            <Link to={`/single-beer/${beer._id}`}>{beer.name}</Link>
          </h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.description}</p>
          <p>{`Attenuation level : ${beer.attenuation_level}`}</p>
          <p>{`First brewed ${beer.first_brewed}`}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default RandomBeer
