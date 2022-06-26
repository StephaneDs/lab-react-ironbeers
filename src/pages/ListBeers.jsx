import { Link } from "react-router-dom"
import Header from "../components/Header"
import axios from "axios"
import { useState, useEffect } from "react"

function ListBeers() {
  const [listBeers, setListBeers] = useState(null)

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data)
      setListBeers(response.data)
    })
  }, [])

  if (!listBeers) {
    return (
      <div>
        <Header />
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <ul>
        {listBeers.map((beer) => {
          return (
            <div key={beer.name}>
              <div className="beerContainer">
                <img className="beerImage" src={beer.image_url} alt="" />
                <div className="beerInfo">
                  <h2>
                    <Link to={`/single/${beer.id}`}>{beer.name}</Link>
                  </h2>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </div>
              </div>
              <hr />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ListBeers
