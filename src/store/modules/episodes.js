let Parser = require("rss-parser");
let parser = new Parser();

const episodes = {
  namespaced: true,
  state: {
    loading: false,
    feed: null
  },
  mutations: {
    setFeed(state, feed) {
      state.feed = feed;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    }
  },
  actions: {
    async loadFeed({ commit }) {
      commit("toggleLoading");
      const feed = await parser.parseURL(
        "https://prod-115.westeurope.logic.azure.com:443/workflows/1723d19bbfce4f8f9c1fa70ac8e5bf00/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=T5YMKgVH_HA4iTJnBFq2dZs-mVZvSKwq99H_nK8JSbs"
      );

      commit("setFeed", feed);
      commit("toggleLoading");
    }
  }
};

export default episodes;
