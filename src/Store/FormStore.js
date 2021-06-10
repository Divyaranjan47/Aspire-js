import FormAction from '../Actions/FormAction';

export default {
    state: {
        formData: {}
    },
    mutations: {
        SET_FORM_DATA(state, data) {
            state.formData = {
                ...state.formData,
                ...data
            }
        },
        CLEAR_FORM_DATA(state) {
            state.formData = {};
        }
    },
    actions: {
        ...FormAction
    },
    getters: {

    }
}