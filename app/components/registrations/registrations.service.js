class RegistrationsService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }


    /**
     * Get the table data
     * 
     * @returns {Promise<Object[]>} items with a name and id
     */
    getTableData() {
        //return $http.get(...something)        

        return this.$q.when([
            {
                id: 1,
                name: 'item 1'
            },
            {
                id: 2,
                name: 'item 2'
            }
        ]);
    }


    /**
     * Get the details of an item
     * 
     * @param {Number} id of the item to fetch 
     * @returns {Object} with details
     */
    getItemData(id) {
        let result;

        switch (id) {
            case 1:
                result = {
                    id: 1,
                    name: 'item 1',
                    details: {
                        subject: 'Hello World',
                        description: `I'm am saying hello to all the world.`
                    }
                };
                break;
            case 2:
                result = {
                    id: 2,
                    name: 'item 2',
                    details: {
                        subject: 'Hello you',
                        description: `I'm am saying hello just for you.`
                    }
                };
                break;
            default:
                result = {
                    id: -1,
                    name: 'unknown',
                    details: {
                        subject: 'none',
                        description: 'no result found.'
                    }
                };
        }

        return this.$q.when(result);
    }
}

RegistrationsService.$inject = ['$http', '$q'];//todo: ngAnnotate

export default RegistrationsService;