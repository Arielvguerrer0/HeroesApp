import { heroes } from '../../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    //creamos el arreglo con la validacion de los publisher
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    //validamos si el publisher no es correcto enviamos el error
    if( !validPublisher.includes( publisher ) ) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    //si los parametros son correctos devolvermos los heroes filtrados por el publisher
    return heroes.filter( hero => hero.publisher === publisher );

}
