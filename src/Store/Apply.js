import ApplyAction from '../Actions/ApplyAction';

export default {
    state: {
        isSubmiited: false
    },
    mutations: {
        SET_STATUS(state) {
            state.isSubmiited = true;
        }
    },
    actions: {
        ...ApplyAction
    },
    getters: {
        
    }
};