import angular from 'angular';
import uirouter from 'angular-ui-router';

import ResgateController from './resgate.controller';
import resgateService from '../servicos/resgate.service';

export default angular.module('myApp', [uirouter, resgateService])
  .controller('ResgateController', ResgateController)
  .name;
