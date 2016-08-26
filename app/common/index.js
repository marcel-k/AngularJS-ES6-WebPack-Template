import Nav from './nav';
import Header from './header';

const common = angular
  .module('app.common', [
     Nav,
     Header
  ])
  .name;

export default common;