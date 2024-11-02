import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove admin from local storage
        localStorage.removeItem('admin');

        // dispatch logout action
        dispatch({type: 'LOGOUT'});
    }

    return { logout };
}