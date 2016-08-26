import RegistrationsTableComponent from './registrations-table.component';

const registrationsTable = angular
  .module('registrations.table', [      
            
  ])
  .component('registrationsTable', RegistrationsTableComponent)  
  .name;

export default registrationsTable;