import { Routes,Route, Navigate } from "react-router-dom"
import { MarvelPage,DcPage,HeroPage,SearchPage } from "../../heroes/barrelFile"
import { NavBar } from "../../UI/barrelFile"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar/>
        <div className="container">
          <Routes>
              <Route path="/" element={<Navigate to="/marvel"/>}/>
              <Route path="/marvel" element={<MarvelPage/>} />
              <Route path="/dc" element={<DcPage/>} />
              <Route path="/search" element={<SearchPage/>} />
              <Route path="/hero/:id" element={ <HeroPage/> }/>
          </Routes>
        </div>
    </>
  )
}