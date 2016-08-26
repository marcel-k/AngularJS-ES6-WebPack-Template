//## import angular explicitly so bundler knows of dependency. use global angular var.
import ng from 'angular'; 
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const root = angular
    .module('app', [
        uiRouter,
        Common,
        Components
    ])
    .component('app', AppComponent)
    .config(($urlRouterProvider, $stateProvider) => {
        $urlRouterProvider.otherwise('/registrations');       
    })
    .name; //## Export name so it be used directly for Angular module dependency imports

angular.bootstrap(document, [root]);

export default root;