import { createStore } from 'vuex';
import list from "./modules/list"
const store = createStore({
    state:{},
    mutations: {},
    actions: {},
    modules: {
        list,
    }
});

export default store;