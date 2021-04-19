import { authAPI } from '../../API/usersAPI';

const initialState = {
    id: null,
    email: null,
    isAuth: false
};

export const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SET_USER_DATA':
            console.log('reducer');
            return { ...state, ...action.payload }
            
        default:
            return state;
    }
};

export const login = (email, password) => async (dispatch) => {
    console.log(123)
    const res = await authAPI.login(email, password);
    console.log(res);
}

export default usersReducer;