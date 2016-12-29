import DataAccessService from '../data/data-access-service';

function _getShortDelay () {
    return _getRandomDelayBetween(1, 3, 2);
}

function _getRandomDelayBetween (min, max, roundTo) {
    return Number(Math.random() * (max - min) + min).toFixed(roundTo);
}

const ExampleDomainService = {
    getFoo () {
        return DataAccessService.get('/foo');
    },
    getFakePromise (doReject) {
        return new Promise((resolve, reject) => {
            const delay = _getShortDelay();
            setTimeout(() => {
                doReject
                    ? reject({message: 'Error fetching data!'})
                    : resolve({delay});
            }, delay * 1000);
        });
    }
};

export default ExampleDomainService;
