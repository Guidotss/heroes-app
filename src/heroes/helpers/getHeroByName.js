import { heroes } from '../data/heroes'

export const getHeroByName = (name = '') => {

    name = name.toLocaleLowerCase().trim();
    
    if (name === '') {
        return [];
    } 
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes( name ));
}