import { useState } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const NewBeer = () => {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewerTips, setBrewerTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: "POST",
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data: {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewer_tips: brewerTips,
        attenuation_level: attenuationLevel,
        contributed_bsy: contributedBy,
      },
    })
      .then((response) => {
        console.log("response.data", response.data)

        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewerTips("")
        setAttenuationLevel("")
        setContributedBy("")

        navigate("/")
      })
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <Header />
      <form className="newBeerForm" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
        />
        <label> tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          onChange={(e) => setBrewerTips(e.target.value)}
          value={brewerTips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationLevel"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        <button className="buttonForm" type="submit">
          ADD NEW
        </button>
      </form>
    </div>
  )
}

export default NewBeer
