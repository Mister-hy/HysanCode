/**
 * 公共接口配置
*/
const ApiConfig = {
    "api1": {
        baseURL: 'https://admin.hxwendeng.com'
    },
    "api2": {
        baseURL: 'http://weixin.itying.com'
    }
}
/**
 * 路径白名单
*/
const pathWhiteList = [
    "/login",
    "/404",
    "401",
    "/settings"]
const Field = {
    logonCredentials :'token',
    userInfoKey:'userInfo'
}
export  {
    ApiConfig , pathWhiteList,Field
}