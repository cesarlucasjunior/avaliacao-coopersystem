import { inherit } from "@uirouter/core";

export default class ResgateController {

  constructor(resgateService) {
    var vm = this;

    init();

    function init(){
        console.log('Teste');
    }
  }
  
}
ResgateController.$inject = ['resgateService', 'myApp'];
