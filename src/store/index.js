import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		animals: [],
	},
	mutations: {
		setAnimals(state, payload) {
			state.animals = payload
		}
	},
	actions: {
		async fetchAnimals({ commit }) {
			const response = await fetch('https://demo-api.vsdev.space/api/farm/baby')
			const data = await response.json()

			commit('setAnimals', data)
		}
	},
})
