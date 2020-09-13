import { fetchAksList, fetchAskDetail, fetchJobList, fetchNewsList, fetchUserInfo } from '../api/index'


export default {
    FETCH_NEWS(context) {
        //news api
        fetchNewsList()
            .then(res => {
                console.log(res)
                context.commit('SET_NEWS', res.data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    //job api call
    FETCH_JOB({ commit }) {
        fetchJobList()
            .then(({ data }) => {
                commit('SET_JOB', data)
            })
            .catch(error => {
                console.log(error)
            })
    },
    //ask api call
    FETCH_ASK(context) {
        //ask api
        fetchAksList()
            .then(res => {
                console.log(res)
                context.commit('SET_ASK', res.data)
            })
    },FETCH_USER({commit}, name) {
        fetchUserInfo(name)
        .then(res => {
            commit('SET_USER',res.data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK_DETAIL({ commit }, id) {
        console.log('[id]',id)
        fetchAskDetail(id)
        .then(res => {
            console.log(res.data)
            commit('SET_ASK_DETAIL',res.data) // mutations call
        }).catch(error => console.log(error))
    }

}