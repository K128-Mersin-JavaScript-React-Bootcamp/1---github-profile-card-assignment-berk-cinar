import axios from "axios";

let userName = document.getElementById('userName');
let githubUserName = userName.value

const url = `https://api.github.com/users/${githubUserName}/repos`;

function handleClick(url) {
    return axios
        .get(url)
        .then(console.log()
        )
}
/* import axios from 'axios'

const address = 'https://api.github.com/users/'

export default {
    async getUserRepos(userName) {
        return axios.get(address + userName + '/repos?per_page=100')
    },
    async getUserInfo(userName) {
        return axios.get(address + userName)
    },
}

 */





