import controller from './registrations-table.controller';

const RegistrationsTableComponent = {
    bindings: {
        items: '<',
        onItemClick: '&'
    },
    controller,
    template: `
    <fieldset>
        <legend>Registrations list component</legend>    
        <ul>
            <li ng-repeat="item in $ctrl.items">
                <a ng-click="$ctrl.itemClick(item.id)" href="#" ng-bind="item.name"></a>
            </li>
        </ul>
    </fieldset>`
};

export default RegistrationsTableComponent;