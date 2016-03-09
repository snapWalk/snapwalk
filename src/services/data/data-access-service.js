import AjaxService from './ajax-service';

/**      Author: Mike Chabot
 *  Description: HTTP service capable of performing GET and POST requests
 *               This service will be injected into domain services (e.g. PatientService, MedicationService)
 *               Agnostic of prototype/production
 */
const DataAccessService = {
    get(url) {
        return _request('GET', url);
    },
    post(url, data) {
        return _request('POST', url, data);
    }
};

const _request = (method, url, data) => {

    let options = {
        method: method,
        url: url,
        responseType: 'json',
        withCredentials: true
    }

    if (data) {
        options.data = JSON.stringify(data);
        options.contentType = 'application/json';
    }

    // Resolve the original request, and wrap the response
    // in another promise. This allows allows us to peer into
    // the response before giving it back to the calling
    // domain service. For instance, we could throw a
    // notification to the end-user on authorization errors
    return new Promise((resolve, reject) => {
        AjaxService.request(options)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    });

};

export default DataAccessService;