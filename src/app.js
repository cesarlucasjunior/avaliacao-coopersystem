'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import home from './modulos/home/home.js';
import resgate from './resgate/resgate.js';

angular
.module('myApp', [
  uirouter,
  blockUI,
  home,
  resgate
 ])
.config(routing);


