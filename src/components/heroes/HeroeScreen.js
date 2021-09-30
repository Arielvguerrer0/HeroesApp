import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroesById } from '../selectors/getHeroById';

export const HeroeScreen = ({ history }) => {

    //hook para obtener los parametros de un url
    const {heroeId } = useParams();

    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId] );
    
    if ( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if( history.length <=2 ) {
            history.push('/')
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters

    } = hero;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img 
                            //src={`../assets/heroes/${ heroeId }.jpg` }
                            src={heroImages(`./${heroeId}.jpg`).default }
                            alt={ superhero }
                            className="img img-responsive animate__animated animate__fadeInLeft"
                        />
                    </div>

                    <div className="col-md-6">
                        <h3> { superhero } </h3>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <b> Alter ego: </b> { alter_ego }   </li>
                            <li className="list-group-item"> <b> Puslisher: </b> { publisher }   </li>
                            <li className="list-group-item"> <b> First Appearence: </b> { first_appearance }   </li>
                        </ul>

                        <h5> Charactesr </h5>
                        <p> { characters } </p>

                        <button className="btn btn-outline-info"
                            onClick={ handleReturn }
                        >
                                Volver
                        </button>

                    </div>

                </div>

            </div>
        </>                    
    )
}
