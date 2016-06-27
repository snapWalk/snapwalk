import { browserHistory } from 'react-router';
import ConfigService from './config-service';

const PREFIX = '/';

function _removePrefix(path) {
    if (path.charAt(0) === PREFIX) {
        return path.slice(1, path.length);
    }
    return path;
}

export default {
    /**
     * Thunk for changing routes
     * @param path
     */
    goToPath(path) {
        if (!path) return;

        return function() {
            browserHistory.push(`${ConfigService.getBasePath()}${_removePrefix(path)}`);
        }
    }
}