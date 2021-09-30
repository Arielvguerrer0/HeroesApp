import React from 'react'
import { mount } from 'Enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchScreen } from '../../components/search/SearchScreen'

describe('Pruebas en < SearchScreen />', () => {

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <Route path="/search" component={ SearchScreen } />
        </MemoryRouter>
    )

    test('Debe de mostrarse correctamente con los valores por defecto', () => {
    
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero')
    
    });

    test('Debe de mostrar a batman y el input con el valor del queryString', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value') ).toBe('batman')
    });

    test('Debe de mostrar un error si no se encuentra el Hero  ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman23123']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        )

        expect(wrapper.find('.alert-danger').text().trim() ).toBe(`There is no a hero with batman23123`)
    })
    
    test('debe de llamar el push del history', () => {
        
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman23123']}>
                <Route
                path="/search" 
                component={ () => < SearchScreen history={ history } /> } />
            </MemoryRouter>
        );
        
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)

    })
    
    
    
})
