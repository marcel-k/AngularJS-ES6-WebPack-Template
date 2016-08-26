import controller from './registration-options.controller';

const RegistrationOptionsComponent = {
    bindings: {
        data: '<'
    },
    controller,
    template:`
    <fieldset>
    <legend>Registration options component</legend>
        <ul>
            <li ng-repeat="item in $ctrl.list" ng-bind="item.text"></li>
        </ul>
    </fieldset>`
};

export default RegistrationOptionsComponent;