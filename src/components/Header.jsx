import { Link } from "react-router-dom"
import React from "react"

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img
            className="houseIcon"
            src={"http://cdn.onlinewebfonts.com/svg/img_159611.png"}
            alt="icon"
          />
        </Link>
      </header>
    </div>
  )
}
export default Header
