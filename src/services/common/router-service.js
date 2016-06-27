import { browserHistory } from 'react-router';
import ConfigService from './config-service';

export default {
    /**
     * Thunk for changing routes
     * @param path
     * @returns {function()}
     */
    goToPath(path) {
        return function() {
            browserHistory.push(
                `${ConfigService.getBasePath()}/${path}`
            );
        }
    }
}