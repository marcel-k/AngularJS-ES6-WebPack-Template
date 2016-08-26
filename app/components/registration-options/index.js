import RegistrationsOptionsComponent from './registration-options.component';

const registrationsOptions = angular
  .module('registration-options', [
    
  ])
  .component('registrationOptions', RegistrationsOptionsComponent)  
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('registrationOptions', {
        url: '/registration-options',
        component: 'registrationOptions',
        resolve: {
          data: () => [{text: 'row 1'}, {text: 'row 2'}] //TODO: should be fetched via service
        } 
      });
  })
  .name;

export default registrationsOptions;