import DataAccessService from '../data/data-access-service';

const ExampleDomainService = {
    getFoo () {
        return DataAccessService.get('/foo');
    }
};

export default ExampleDomainService;
