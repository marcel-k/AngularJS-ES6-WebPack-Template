import controller from './registrations.controller';

const RegistrationsComponent = {  
    bindings:{ data : '<'}, 
    controller,   
    template: 
    `<fieldset>
        <legend>Registrations component</legend>    
        <p>This component is statefull and fetches the data for its children.</p>      
        <registrations-table items="$ctrl.data" on-item-click="$ctrl.selectItem($event);" style="float:left; width: 49%;"></registrations-table>
        <registration-details selected="$ctrl.selected" style="float:left; width: 49%;"></registration-details>
    </fieldset>`    
};

export default RegistrationsComponent;