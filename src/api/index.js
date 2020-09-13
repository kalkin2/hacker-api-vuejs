import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
    newUrl: 'https://hacker-news.firebaseio.com/v0'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`)
}

function fetchAksList() {
    return axios.get(`${config.baseUrl}/ask/1.json`)
}

function fetchJobList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`)
}

function fetchUserInfo(userName) {
    //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    return axios.get(`${config.baseUrl}/user/${userName}.json`)
}

function fetchAskDetail(detailSeq){
    return axios.get(`${config.newUrl}/item/${detailSeq}.json`)

}

export {
    fetchNewsList, fetchAksList, fetchJobList, fetchUserInfo, fetchAskDetail
}
