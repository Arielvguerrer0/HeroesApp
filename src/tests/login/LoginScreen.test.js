import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext"
import { LoginScreen } from "../../components/login/LoginScreen"
import { types } from "../../types/types";

describe('Pruebas en <LoginScren /> ', () => {

    const history = { 
        replace: jest.fn()
    };

    const contextValue = { 
        dispatch: jest.fn(),
    }; 

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <LoginScreen history={ history } />
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('debe de mostrar el Dispatch y la navegacion', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Ariel'
            }
        });

        expect( history.replace ).toHaveBeenCalled();
    });

})
