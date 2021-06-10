import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import Modules
import admin from './Admin';
import apply from './Apply';
import form from './FormStore';

export default new Vuex.Store({
    namespaced: true,
    state: {

    },
    mutations: {

    },
    modules: {
        admin,
        apply,
        form
    }
});