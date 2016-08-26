class RegistrationsController {


    /**
     * Creates an instance of RegistrationsController.
     * 
     * @param {RegistrationsService} registrationService
     */
    constructor(registrationService) {
        this.registrationService = registrationService;
    }

    $onInit() {
        var firstId = this.data[0].id;
        this.registrationService.getItemData(firstId).then(response =>
            this.selected = response
        );
    }

    selectItem($event) {
        this.registrationService.getItemData($event.id).then(response =>
            this.selected = response
        );
    }
}

RegistrationsController.$inject = ['RegistrationsService'];

export default RegistrationsController;