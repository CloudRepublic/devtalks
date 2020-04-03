<template>
  <div class="wrapper">
    <go-top :size="40" bg-color="#2b557d"></go-top>
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-40 md-small-size-70 md-xsmall-size-100"
          >
            <img
              :src="logo"
              alt="Raised Image"
              class="img-raised rounded"
              :class="{ 'responsive-image': responsive }"
            />
          </div>
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100 podcast-header"
          >
            <h1 class="title">Dev Talks</h1>
            <h4>
              In deze podcast bespreken we de laatste trends op het gebied van
              software development. We behandelen topics zoals; cloud
              ontwikkelingen, security, tooling, front-end, back-end en nog veel
              meer.
            </h4>
            <br />
            <md-button @click="showListenModal = true" class="md-primary md-lg">
              <i class="fas fa-headphones"></i> Luister nu
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Afleveringen</h2>

              <div class="episodes">
                <vue-element-loading
                  :active="episodeLoading"
                  spinner="bar-fade-scale"
                />
                <div
                  v-for="episode in episodes"
                  :key="episode.guid"
                  class="episode"
                >
                  <div class="player">
                    <aplayer
                      theme="#2b557d"
                      :mini="true"
                      :music="{
                        title: episode.title,
                        artist: '🎵',
                        src: episode.enclosure.url,
                        pic: logo
                      }"
                    />
                    <h3>{{ episode.title }}</h3>
                  </div>
                  <foldable class="transition-demo" height="100" async>
                    <p
                      align="center"
                      slot="view-more"
                      slot-scope="{ toggle, collapsed }"
                      @click="toggle"
                    >
                      {{ collapsed ? "Toon meer" : "Toon minder" }}
                    </p>
                    <div
                      class="description text-left"
                      v-html="episode.content"
                    ></div>
                  </foldable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <listen-modal
      :show="showListenModal"
      @hide="showListenModal = false"
    ></listen-modal>
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";
import Aplayer from "vue-aplayer";
import GoTop from "@inotom/vue-go-top";
import ListenModal from "@/components/custom/ListenModal";

export default {
  components: {
    VueElementLoading,
    Aplayer,
    GoTop,
    ListenModal
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg3.jpg")
    },
    logo: {
      type: String,
      default: require("@/assets/img/logo.jpg")
    }
  },
  data() {
    return {
      responsive: false,
      showListenModal: false
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    },
    episodeLoading() {
      return this.$store.state.episodes.loading;
    },
    episodes() {
      const episodes = this.$store.state.episodes.feed?.items;
      if (!episodes) {
        return [];
      } else {
        return episodes;
      }
    }
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.$store.dispatch("episodes/loadFeed");
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="scss">
.podcast-header .title {
  font-size: 5vw;
}

.podcast-header h4 {
  font-size: 1vw;
}

@media screen and (max-width: 1024px) {
  .podcast-header .title {
    font-size: 6vw;
  }

  .podcast-header h4 {
    font-size: 2vw;
  }
}

@media screen and (max-width: 992px) {
  .podcast-header .title {
    font-size: 7vw;
  }

  .podcast-header h4 {
    font-size: 1.5vw;
  }
}

@media screen and (max-width: 768px) {
  .podcast-header .title {
    font-size: 6vw;
  }

  .podcast-header h4 {
    font-size: 3vw;
  }

  .aplayer {
    overflow: visible !important;
  }
}

@media screen and (max-width: 600px) {
  .podcast-header .title {
    font-size: 10vw;
  }

  .podcast-header h4 {
    font-size: 4vw;
  }

  .episode h3 {
    font-size: 5vw;
  }

  .episode .player .aplayer-body {
    min-width: 66px;
  }
}

.episode {
  padding: 1vw;
  margin-bottom: 1vh;

  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.player {
  display: flex;
}

.player h3 {
  margin: 0 0;
  margin-left: 1vw;
}
.description a {
  color: #2b557d !important;
}

.vue-foldable-container {
  transition: max-height 0.3s;
}

.vue-foldable-mask {
  transition: opacity 3s;
}
</style>
