
import axiosClient from './axiosClient';

const setAuthHeader = (token) => {
    if (token){
        axiosClient.defaults.headers = {
            'Accept': 'application/json',
            'Authorization': token,
            'Content-Type': 'application/json',
        };
    } else if(axiosClient.defaults.headers.Authorization) {
        delete axiosClient.defaults.headers.Authorization;
    }
}

export default setAuthHeader;