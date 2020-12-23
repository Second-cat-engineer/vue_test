import axios from 'axios';
import config from '../config/apiConfig';

/**
 * /countries - array of countries
 * /cities - array of cities
 * /prices/cheap - array
 */
class Api {
    constructor(config) {
        this.url = config.url;
    }

    async countries() {
        try {
            const response = await axios.get(`${ this.url }/countries`);
            return response.data;
        } catch (err) {
            return Promise.reject(err);
        }
    }
    async cities() {
        try {
            const response = await axios.get(`${ this.url }/cities`);
            //console.log(response);
            return response.data;
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    async prices(params) {
    }
}

const api = new Api(config);
export default api;