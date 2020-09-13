export default {
    SET_NEWS(state, newsData) {
        state.news = newsData
    },
    SET_JOB(state, jobData) {
        state.job = jobData
    },
    SET_ASK(state, askData) {
        state.ask = askData
    },
    SET_USER(state,userData) {
        state.user = userData
    },
    SET_ASK_DETAIL(state, askDetailData) {
        console.log('질문상세 뮤테이션 ')
        state.askDetail = askDetailData
    }

}