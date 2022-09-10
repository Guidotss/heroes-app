import { getHeroesByPublisher } from "../barrelFile"
import { HeroItem } from './HeroItem'

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return(
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      
      {
        heroes.map(hero => {
          return <HeroItem key={hero.id} hero={hero} />
        })
      }
      
    </div>
  )
}