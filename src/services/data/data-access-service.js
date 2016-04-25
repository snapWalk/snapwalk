import AjaxService from './ajax-service';

/**      Author: Mike Chabot
 *  Description: HTTP service capable of performing GET and POST requests
 *               This service will be injected into domain services (e.g. PatientService, MedicationService)
 *               Agnostic of prototype/production
 */

const _request = (method, url, data) => {

    let options = {
        method: method,
        url: url,
        responseType: 'json'
    };

    if (data) {
        options.data = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json'
        };
    }

    // Resolve the original request, and wrap the response in another promise.
    // This allows allows us to peer into the response before giving it back
    // to the caller, which is helpful when handling situations where a response
    // is technically successful from an AJAX perspective (200 OK), but failed
    // server-side due an arbitrary error (i.e. validation error).
    return new Promise((resolve, reject) => {
        AjaxService.request(options)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                error.message = error.message || `${error.status} ${error.statusText}`;
                reject(error);
            });
    });

};

const DataAccessService = {
    get(url) {
        return _request('GET', url);
    },
    post(url, data) {
        return _request('POST', url, data);
    }
};


export default DataAccessService;
