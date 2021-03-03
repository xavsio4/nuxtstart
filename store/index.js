//store/index.js
export const state = () => ({
    body_metric: 'cm',
    bike_metric: 'inch'
})

export const mutations = {
  selectedBodyMetric(state, payload) {
    state.body_metric = payload
    },
    selectedBikeMetric(state, payload) {
    state.bike_metric = payload
  }
}

export const getters = {
  getMetric(state) {
    return state.metric
  }
}