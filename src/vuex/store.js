import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const state = {
    // 判断note-list显示隐藏
    listFlag: false, 
    // 判断pop-up显示隐藏
    popupFlag: false,
    // todo事件列表
    todoList: [],
    // 删除todo的编号
    deleteIndex: 0,
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})