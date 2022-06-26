import React from "react"
import allBeersPic from "./../assets/beers.png"
import ramdomBeerPic from "./../assets/random-beer.png"
import newBeerPic from "./../assets/new-beer.png"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <img class="barPic" src={allBeersPic} alt=""></img>
      <h1>
        <a href="/beers">All Beers</a>
      </h1>
      <p>
        loremId enim occaecat non ex duis anim. Do do ut laboris est duis id
        consectetur proident do aliquip ullamco. Do pariatur dolor sint cillum.
        Cupidatat fugiat non aute dolore voluptate. Enim occaecat cupidatat eu
        est ipsum Lorem et sunt deserunt reprehenderit nisi anim Lorem. Aute id
        ullamco exercitation nisi in nulla non labore reprehenderit sit officia
        ea consectetur.
      </p>

      <img class="barPic" src={ramdomBeerPic} alt=""></img>
      <h1>
        <a href="/random">Random Beer</a>
      </h1>
      <p>
        loremId enim occaecat non ex duis anim. Do do ut laboris est duis id
        consectetur proident do aliquip ullamco. Do pariatur dolor sint cillum.
        Cupidatat fugiat non aute dolore voluptate. Enim occaecat cupidatat eu
        est ipsum Lorem et sunt deserunt reprehenderit nisi anim Lorem. Aute id
        ullamco exercitation nisi in nulla non labore reprehenderit sit officia
        ea consectetur.
      </p>
      <img class="barPic" src={newBeerPic} alt=""></img>
      <h1>
        <a href="/new">New Beer</a>
      </h1>
      <p>
        loremId enim occaecat non ex duis anim. Do do ut laboris est duis id
        consectetur proident do aliquip ullamco. Do pariatur dolor sint cillum.
        Cupidatat fugiat non aute dolore voluptate. Enim occaecat cupidatat eu
        est ipsum Lorem et sunt deserunt reprehenderit nisi anim Lorem. Aute id
        ullamco exercitation nisi in nulla non labore reprehenderit sit officia
        ea consectetur.
      </p>
    </div>
  )
}

export default HomePage
