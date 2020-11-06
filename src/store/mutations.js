import { ADD_COUNT, ADD_TO_CART } from './mutations-type'
export default {
    [ADD_COUNT](state, oldProduct) {
        oldProduct.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.count = 1;
        payload.check = true;
        state.cartList.push(payload)
    }
}