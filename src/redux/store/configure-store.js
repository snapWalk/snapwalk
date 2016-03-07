import production from './configure-store.prod';
import development from './configure-store.dev';

/**
 * Determine which Redux store to provide based on the
 * Environment Type of Node.js
 * @return {object}    Redux store
 */
export default process.env.NODE_ENV === 'production'
    ? production
    : development
