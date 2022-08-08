import {Http} from "../utils/http"

export class TestModel extends Http {
    static getNav(){
      return Http.request({
        url:'/api/app/nav',
        method:'GET',
        data:{},
        name:'api1'
      })
    }
    static getBanner(){
        return Http.request({
          url:'/api/focus',
          method:'GET',
          data:{},
          baseUrl:'api2'
        })
      }
}
