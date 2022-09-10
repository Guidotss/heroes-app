import { Routes,Route, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { NavBar } from "../UI/barrelFile"
import { HeroesRoutes } from "../heroes/barrelFile"

export const AppRouter = () => {
  return (
    <> 
      <Routes>
          <Route path="login" element={<LoginPage/>} />
          <Route path="/*" element={ <HeroesRoutes/> }/>
      </Routes>
    </>
  )
}