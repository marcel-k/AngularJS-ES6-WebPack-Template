class RegistrationsTableController {

    constructor() {

    }

    itemClick(id) {
        this.onItemClick({
            $event: {
                id: id
            }
        });
    }
}

RegistrationsTableController.$inject = [];//todo: ngAnnotate

export default RegistrationsTableController;