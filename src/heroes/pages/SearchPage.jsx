import { useNavigate,useLocation } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hook/useForm"
import { HeroItem, getHeroByName } from "../barrelFile"



export const SearchPage = () => {

  const navigate = useNavigate(); 
  const location = useLocation(); 

  const { q='' } = queryString.parse(location.search);
  

  const { searchText,onInputChange } = useForm({
    searchText:q
  })

  const heroesFiltered = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 && heroesFiltered.length === 0);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchText}`)
  }



  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>

              <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off" 
              value={ searchText }
              onChange={ onInputChange }/>

              <button className="btn btn-outline-primary mt-2">Search</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <hr />
        {/*     {
              (q === '') && <div className="alert alert-info">Search a hero</div>
            }
            {
              (q !== '' && heroesFiltered.length === 0) && <div className="alert alert-danger">There is no a hero with { q }</div>
            } */}

            <div className="alert alert-info" style={{ display: showSearch ? '' : 'none' }}>Search a hero</div>
            <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }} >There is no a hero with { q }</div>
            {
              heroesFiltered.map(hero => (
                <HeroItem key={hero.id} hero={hero}/>
              ))
            }
            
          </div>
      </div>
    </>
  )
}