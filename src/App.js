import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ListBeers from "./pages/ListBeers"
import NewBeer from "./pages/NewBeer"
import RandomBeer from "./pages/RandomBeer"
import SingleBeer from "./pages/SingleBeer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<ListBeers />} />
          <Route path="/new" element={<NewBeer />} />
          <Route path="/random" element={<RandomBeer />} />
          <Route path="/single/:id" element={<SingleBeer />} />
          {/* <Route path="/user">

            <Route path="/:id"/>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
