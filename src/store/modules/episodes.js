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
        "https://prod-34.westeurope.logic.azure.com/workflows/3ee1a13477b349f0b3ca698efe651e9b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oo-rJka_vszj5Wu8uCev0SRmA2ro3QePUV8y-g8bpNo"
      );

      commit("setFeed", feed);
      commit("toggleLoading");
    }
  }
};

export default episodes;
