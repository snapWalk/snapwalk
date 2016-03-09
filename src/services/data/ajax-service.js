import { BASE_URL } from '../../common/app-const';
import axios from 'axios';

/**      Author: Mike Chabot
 *  Description: Service for making AJAX requests.
 *               Uses Axios (https://github.com/mzabriskie/axios)
 */
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 4000
});

export default {
    request(options) {
        return instance.request(options);
    }
};
