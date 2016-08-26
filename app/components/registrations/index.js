import Table from './registrations-table';
import RegistrationsComponent from './registrations.component';
import RegistrationsService from './registrations.service';

const registrations = angular
  .module('registrations', [
    Table
  ])
  .component('registrations', RegistrationsComponent)
  .service('RegistrationsService', RegistrationsService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('registrations', {
        url: '/registrations',
        component: 'registrations',
        resolve: {
          /**
           * Registrations component is a 'routed component', and should get its data via the rout resolve (so page load only occurs when data is fetched).
           */        
          data: RegistrationsService => RegistrationsService.getTableData()
        }
      });
  })
  .name;

export default registrations;