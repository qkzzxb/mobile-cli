// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// this.$store.commit(method, params)

import store from '../'
import basil from '@/core/basil'

export default {
    set_msg(state, data) {
        state.msg = data;
    }
}