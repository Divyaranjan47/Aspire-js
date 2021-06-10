import adminAction from '../Actions/AdminAction';

export default {
    state: {
        users: [],
        approvedUsers: []
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.users = data;
        },
        APPROVE_USER(state, data) {
            let aUsers = state.approvedUsers;
            aUsers.push(data);
            state.approvedUsers = aUsers;
        }
    },
    actions: {
        ...adminAction
    },
    getters: {
        
    }
};