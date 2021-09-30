import { mount } from "enzyme"
import { MemoryRouter } from "react-router"
import { AuthContext } from "../../auth/AuthContext"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"

describe('Pruebas en < DashBoardRoutes />', () => {

    const contextValue = { 
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Juanito'
        }
    } 
    
    test('Debe mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value= { contextValue }>
                <MemoryRouter> 
                    <DashBoardRoutes />
                </MemoryRouter> 
            </AuthContext.Provider>
        )
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Juanito')

    })
    
})
