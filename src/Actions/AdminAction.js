import axios from 'axios';

const apiUrl = 'https://60c035bbb8d3670017554845.mockapi.io/aspire/loans/applications';

function getUserDetails() {
    return axios({
        url: apiUrl,
        method: 'GET'
    }).then(res => res.data)
    .catch(e => e);
}

function approveUser(data) {
    return axios({
        url: `${apiUrl}/${data.id}`,
        method: 'PUT',
        data: data
    }).then(res => res.data)
    .catch(e => e);
}

const actions = {
    async getUsers({commit}) {
        commit('SET_USER_INFO', await getUserDetails());
    },
    async approve({dispatch, commit}, data) {
        commit('APPROVE_USER', await approveUser(data));
        dispatch('getUsers');
    }
}

export default actions;