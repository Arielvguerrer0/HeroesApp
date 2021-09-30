import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import { HeroeScreen } from "../../components/heroes/HeroeScreen"

describe('Pruebas en < HeroeScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroeScreen history={ history } />
        </MemoryRouter>
    )
    
    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })

    test('Debe de mostrar un hero si existe el parametro ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroeId' component={ HeroeScreen } />  
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe( true );
        
    });

    test('Debe de regresar a la pantalla anterior con PUSH ', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                path='/hero/:heroeId'
                component={ () => < HeroeScreen history={ history } />} 
                />  
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                path='/hero/:heroeId'
                component={ () => < HeroeScreen history={ history } />} 
                />  
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
        
    });

    test('Debe de llamar el redirect si el heroe no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider423424']}>
                <Route
                path='/hero/:heroeId'
                component={ () => < HeroeScreen history={ history } />} 
                />  
            </MemoryRouter>
        );

       expect( wrapper.text() ).toBe('');
        
    })
    
    
    
    
    
})
