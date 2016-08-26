import controller from './registration.controller';

/**
 * Registration details.
 */
const RegistrationComponent = {
    bindings: {
        selected: '<'
    },
    controller,
    template: `
    <fieldset>
        <legend>Registration details component</legend>        
        <div>
            <span>name:</span>
            <span ng-bind="$ctrl.current.name"></span>            
        </div>
        <div>
            <span>subject:</span>
            <span ng-bind="$ctrl.current.details.subject"></span>            
        </div>
        <div>
            <span>description:</span>
            <span ng-bind="$ctrl.current.details.description"></span>            
        </div>
        <div>
            <span>random number added from child component:</span>
            <span ng-bind="$ctrl.current.random"></span>            
        </div>
    </fieldset>`
};

export default RegistrationComponent;