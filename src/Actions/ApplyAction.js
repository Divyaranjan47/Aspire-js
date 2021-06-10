import axios from 'axios';

function SubmitForApproval(data) {
    return axios({
        url: 'https://60c035bbb8d3670017554845.mockapi.io/aspire/loans/applications',
        method: 'POST',
        data: data
    }).then(res => res.json())
    .then(data => data)
    .catch(e => e);
}

const actions = {
    async approveLoan({ commit, dispatch }, data) {
        commit('SET_STATUS', await SubmitForApproval(data));
        dispatch('resetForm');
    }
}

export default actions;