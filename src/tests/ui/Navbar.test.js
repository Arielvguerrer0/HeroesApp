import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import { AuthContext } from "../../auth/AuthContext"
import { Navbar } from "../../components/ui/NavBar"
import { types } from "../../types/types"

describe('Pruebas en componente < NavBar />', () => {

    const historyMock = { 
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn
    }

    const contextValue = { 
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Ariel'
        }
    } 
    
    const wrapper = mount(
        <AuthContext.Provider value ={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>    
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => { 
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Ariel')
        
    });

    test('debe de llamar el logout y usar history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        })

        expect( historyMock.replace ).toHaveBeenCalledWith('/login')

    })
    
    
})
