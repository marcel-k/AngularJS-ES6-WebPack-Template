class RegistrationOptionsController {
    constructor() {

    }

    /**
     * Occurs when the binding data changes
     * Also occurs at the initialization of the component, before $onInit     
     * @param {any} changes
     */
    $onChanges(changes) {
        /**
         * One-way dataflow and Events
         * Components that have bindings should use $onChanges to clone the one-way binding data to break Objects passing by reference and updating the parent data.
         * Why? This mirrors Angular 2 and keeps consistency inside every component. It also makes state predictable.
         * Note: $onChanges is called before $onInit
         */
        if (changes.data) {
            this.list = Object.assign({}, this.data);
        }
    }

    /**
     * Occurs once, at the initialization of the component 
     */
    $onInit() {

    }
    /**
     * Occurs once, at the unloading of the component 
     */
    $onDestroy() { }
}

RegistrationOptionsController.$inject = [];

export default RegistrationOptionsController;