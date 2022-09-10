import { useParams } from "react-router-dom"
import { getHeroById } from "../barrelFile"

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
  
  return (
    <h1>Hero</h1>
  )
}