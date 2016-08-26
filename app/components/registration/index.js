import RegistrationComponent from './registration.component';

const registration = angular
  .module('registration', [      
            
  ])
  .component('registrationDetails', RegistrationComponent)  
  .name;

export default registration;