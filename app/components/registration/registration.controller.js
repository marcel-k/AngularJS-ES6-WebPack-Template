class RegistrationController{
    constructor(){}

   $onChanges(changes) {
        /**
         * One-way dataflow and Events
         * Components that have bindings should use $onChanges to clone the one-way binding data to break Objects passing by reference and updating the parent data.
         * Why? This mirrors Angular 2 and keeps consistency inside every component. It also makes state predictable.
         * Note: $onChanges is called before $onInit
         */
        if (changes.selected) {
            this.current = Object.assign({}, this.selected);
        }
    }
}

RegistrationController.$inject = [];

export default RegistrationController;