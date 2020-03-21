import angular from 'angular';
import { forEach } from '@uirouter/core';
class ResgateService{
	constructor($http){
		this.$http = $http;
		this.path = "http://localhost:8080/resgate";
	}
}
export default angular.module('services.resgate-service', [])
.service('resgateService', ResgateService)
.name;