import ConfigService from '../config-service';
import axios from 'axios';

/**
 * Service for making AJAX requests.
 * Uses Axios (https://github.com/mzabriskie/axios)
 *
 * @author  Mike Chabot
 * @type    {AxiosInstance}
 */
const instance = axios.create({
    baseURL: ConfigService.getBaseUrl(),
    timeout: 4000
});

export default {
    request(options) {
        return instance.request(options);
    }
};
