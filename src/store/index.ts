import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        newLocation: '',
        locations: [],
        weather: [],
        loading: false,
    },

    getters: {
        GET_NEW_LOCATION(state) {
            return state.newLocation;
        },
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
            console.log('UPDATE_LOCATIONS');
            // @ts-ignore
            const locations = JSON.parse(localStorage.getItem("locations"));
            locations !== null ? (state.locations = locations) : (state.locations = []);
        },

        CLEAR_NEW_LOCATION_NAME(state, value) {
            state.newLocation = value;
        },

        ADD_WEATHER(state, data) {
            // @ts-ignore
            state.weather.push(data);
        },

        REMOVE_WEATHER(state, index) {
            state.weather.splice(index, 1);
        },

        SWAP_WEATHER(state, data) {
            const temp = state.weather[data.startIndex];
            state.weather[data.startIndex] = state.weather[data.endIndex];
            state.weather[data.endIndex] = temp;
        },

        SET_LOADING(state, value) {
            state.loading = value;
        },
    },

    actions: {
        setLocalStorageLocations({commit}, locations) {
            localStorage.setItem("locations", JSON.stringify(locations));
            commit("UPDATE_LOCATIONS");
        },
        // @ts-ignore
        async checkAndAddWeather({commit, state, dispatch}, currentLocation){
            const newLocation = currentLocation ? currentLocation : state.newLocation
            try {
                await axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
                    )
                    .then((response) => {
                        const data = response.data
                        const locations = state.locations;
                        // @ts-ignore
                        locations.push({
                            // @ts-ignore
                            name: newLocation,
                            // @ts-ignore
                            id: Math.random().toString(16).slice(2),
                        });
                        dispatch("setLocalStorageLocations", locations);
                        commit("ADD_WEATHER", {
                            clouds: data?.clouds,
                            feelLike: data?.main['feels_like'],
                            name: data?.name,
                            pressure: data?.main?.pressure,
                            temp: data?.main?.temp,
                            visibility: data?.visibility,
                            weatherDesc: data?.weather?.description,
                            weatherMain: data?.weather?.main,
                            wind: data?.wind,
                        });
                        if (!currentLocation) commit("CLEAR_NEW_LOCATION_NAME", '');

                    })
                    .catch((error) => {
                        if(error?.response?.data?.cod === "404") {
                            alert(error?.response?.data?.message + " " + ", sorry, we try to add sities list for check your request, but know you must check correct data themself")
                            if (!currentLocation) commit("CLEAR_NEW_LOCATION_NAME", '');
                        }
                    });
            } catch (error) {
                alert("Wrong request to weather api " + error);
            }
        },
        async addWeather({commit, state, dispatch}, location) {
            try {
                await axios
                    .get(
                        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
                    )
                    .then((response) => {
                        const data = response.data
                        commit("ADD_WEATHER", {
                            clouds: data?.clouds,
                            feelLike: data?.main['feels_like'],
                            name: data?.name,
                            pressure: data?.main?.pressure,
                            temp: data?.main?.temp,
                            visibility: data?.visibility,
                            weatherDesc: data?.weather?.description,
                            weatherMain: data?.weather?.main,
                            wind: data?.wind,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        },
        async setCurrentLocation({dispatch}) {
            try {
                await axios.get(`https://ipinfo.io/json?token=${process.env.VUE_APP_IPINFO_TOKEN}`).then((response) => {
                    if (response.data.city) {
                        dispatch("checkAndAddWeather", response.data.city);
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
    },

    modules: {},
});
