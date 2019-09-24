//* Alexis */
import axios from 'axios';

//* Waiting for Back-End to give token */

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Authorization': token
        }
    })
}