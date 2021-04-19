import { authAPI, regUserAPI } from '../../API/usersAPI';


export const setUser = (email, id, isAuth) => ({
    type: 'SET_USER_DATA',
    payload: {email, id, isAuth},
});

export const getUserData = () => async (dispatch) => {
    try {
        const response = await authAPI.me();
        if (response.status === 200) {
            const {email, id} = response.data;
            dispatch(setUser(email, id, true));
        }
    }
    catch{

    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await authAPI.login(email, password);
        console.log(response);
        if (response.status === 200) {
            await localStorage.setItem('token', response.data.auth_token);
            dispatch(getUserData())
        }
    }
    catch (e) {
        alert('Не верные данные');
    }
};

export const logoutUser = () => async (dispatch) => {
    const response = await authAPI.logout();
    localStorage.removeItem('token');
    if (response.status === 204) {
        dispatch(setUser(null, null, false));
    }
};

export const createUser = (email, password) => async (dispatch) => {
    
    try {
        const response = await regUserAPI.create(email, password);
        if (response.status === 201) {
        const response = await authAPI.login(email, password);
        if (response.status === 200) {
            await localStorage.setItem('token', response.data.auth_token);
            dispatch(getUserData());
        }
    }
}
    catch (error) { 
        alert('Попробуйте другой email или проверте ваш пароль.');
    }
}