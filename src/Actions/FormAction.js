const actions = {
    updateInput({ commit }, data) {
        commit('SET_FORM_DATA', data);
    },
    resetForm({commit}) {
        commit('CLEAR_FORM_DATA');
    }
}

export default actions;