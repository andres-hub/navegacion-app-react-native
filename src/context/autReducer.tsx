import { AuthState } from './AuthContext';

type AuthAction = 
    | {type: 'signIn'}
    | {type: 'logout'}
    | {type: 'changeFavIcon', payload: string} 
    | {type: 'changeUserName', payload: string};

// genera un nuevo estado
export const autReducer = (state: AuthState, action: AuthAction ):AuthState =>{

    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
                userName: 'no-userName-yet'
            }
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return{
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeUserName':
            return{
                ...state,
                userName: action.payload
            }
        default:
            return state;

    }

}