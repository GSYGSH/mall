import { ADD_COUNT, ADD_TO_CART } from './mutations-type'
export default {
    addToCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            //不能用some，some返回true
            if (oldProduct) {
                context.commit(ADD_COUNT, oldProduct)
                resolve('添加数量+1')
            } else {
                context.commit(ADD_TO_CART, payload)
                resolve('添加商品')
            }
        })
    }
}
