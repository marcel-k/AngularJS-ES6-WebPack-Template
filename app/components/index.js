import Registration from './registration';
import Registrations from './registrations';
import RegistrationOptions from './registration-options';

const components = angular
  .module('app.components', [
    Registration,
    Registrations,
    RegistrationOptions
  ])
  .name;

export default components;