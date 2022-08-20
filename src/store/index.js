import {createStore} from "vuex";
// import axios from "axios";

export default createStore({
    state: {
        locations: [],
        weather: [],
        loading: false,
    },

    getters: {
        GET_LOCATIONS(state) {
            return state.locations;
        },

        GET_WEATHER(state) {
            return state.weather;
        },

        GET_LOADING(state) {
            return state.loading;
        },
    },

    mutations: {
        UPDATE_LOCATIONS(state) {
            let locations = JSON.parse(localStorage.getItem("locations"));
            locations !== null ? (state.locations = locations) : (state.locations = []);
        },

        ADD_WEATHER(state, data) {
            state.weather.push(data);
        },

        REMOVE_WEATHER(state, index) {
            state.weather.splice(index, 1);
        },

        SWAP_WEATHER(state, data) {
            let temp = state.weather[data.startIndex];
            state.weather[data.startIndex] = state.weather[data.endIndex];
            state.weather[data.endIndex] = temp;
        },

        SET_LOADING(state, value) {
            state.loading = value;
        },
    },

    actions: {

    },

    modules: {},
});
