import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const {q = ''} = queryString.parse( location.search );
    
    const [formValues, handleInputChange ] = useForm ({
        searchText: q
    });

    const { searchText } = formValues;

    const heroFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Busca un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <br />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscar
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Resultados </h4>
                    <hr/>

                    {
                        (q === '')
                            && <div className="alert alert-info">
                            Search a Hero
                            </div>
                    }

                    {
                        (q !== '' && heroFiltered.length === 0 )
                            && <div className="alert alert-danger">
                            There is no a hero with { q }
                            </div>
                    }

                    {
                        heroFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ... hero }
                            />
                        ))
                    }
                </div>

                
            </div>

        </div>

        
    )
}
