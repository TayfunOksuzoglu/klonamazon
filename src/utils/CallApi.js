import axios from 'axios';
import { BASE_URL } from './constants';

const config = {
    headers: {
        'Content-Type': 'application/json',
        //prettier-ignore
        "Accept" : 'application/json',
    },
};

export async function callAPI(resource) {
    const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
    return data;
}
