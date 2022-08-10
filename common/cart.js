import Storage from '../utils/storage'
/**
 * 将商品的数据添加到本地
 * @param {*} data 
 */
// 程序单一性  单一职责 保证一个方法制造一件事情
const addCart = (data) =>{
    // console.log(data);
    // console.log(hasLocalData());
    const carsArray = []
    if(!hasLocalData()){
        data.num = 1 
        carsArray.push(data)
        Storage.set('carts',carsArray)
    }else{
        const localData = Storage.get('carts')

        // console.log(hasShopData(data,localData));
        if(hasShopData(data,localData)){ 
            localData.forEach(item=>{
                if(item._id === data._id){
                 item.num+=1 
                }
            })
            Storage.set('carts',localData)
            console.log(Storage.set('carts',localData));
        }  else {
            data.num = 1 
            localData.push(data)
        }
          Storage.set('carts',localData)
    }
} 
/**
 * 检测是否是第一次存储 是否有本地存储
*/
const hasLocalData = () =>{
    const carts = Storage.get('carts')
    const status = carts ? true : false
    return status
}
/**
 * 判断当前要添加的商品是否在本地存储
*/
const hasShopData = (data,localData) =>{
  const _data =  localData.filter(item=>{
      return  item._id == data._id
    })
   return _data.length > 0 ? true : false
}
 /**
     * 第一次存(没有)
     * 直接存储
     * 
     * 非第一次存(有)
     *  判断本地有咩有本次要添加的商品
     * 有
     *  商品的数量加1
     * 没有
     *  在本地的数据基础上再添加一条数据
    */
export {addCart}