import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'


Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        news: [],
        job: [],
        ask: [],
        user: {},
        askDetail: {},
    },
    getters: {
        getFetchedAsk(state) {
            return state.ask
        },
        getFetchedJob(state) {
            return state.job
        },
        getFetchedNews(state) {
            return state.news
        },
        getFetchUser(state) {
            return state.user
        },
        getFetchAskDetail(state) {
            console.log('getFetchAskDetail', state)
            return state.askDetail
        }

    },
    mutations,
    actions

})