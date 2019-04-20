import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    stateLogin: 0,
    haveLogined: true,
    writestate: 0,
    writedMessage: '',
    token: localStorage.getItem('token') ? localStorage.getItem('token') : 'hahah' //token有token就返回token，没有token就返回空
}
const getters = {
    isState(state) {
        return state.stateLogin
    }
}
const mutations = {
    setToken (state, token) {
        state.token = token
        localStorage.setItem("token", token.token)
        console.log(state.token)
    },
    del_token(state) {
        state.token = ''
        sessionStorage.removeItem('token')
    }
}
const actions = {
    showdata(store) {
        store.commit('show')
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store