<template>
  <modal class="modal" v-if="show" @close="ModalHide">
    <template slot="header">
      <h3 class="modal-title md-primary">Luister naar Dev Talks op</h3>
      <md-button class="md-simple md-just-icon md-round modal-default-button" @click="ModalHide">
        <md-icon>clear</md-icon>
      </md-button>
    </template>

    <template slot="body">
      <div class="channels">
        <channel
          link="https://podcasts.apple.com/nl/podcast/dev-talks/id1493819242"
          logoName="apple"
          name="Apple Podcasts"
        ></channel>
        <channel
          link="https://open.spotify.com/show/6DwXrsGQTnWZfd3WHUcw3J"
          logoName="spotify"
          name="Spotify"
        ></channel>
        <channel
          link="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS83OTMwMTkucnNz"
          logoName="google"
          name="Google Podcasts"
        ></channel>
        <channel
          link="https://www.stitcher.com/podcast/dev-talks"
          logoName="stitcher"
          name="Stitcher"
        ></channel>
        <channel
          link="https://tunein.com/podcasts/Technology-Podcasts/Dev-Talks-p1282667/"
          logoName="tunein"
          name="TuneIn"
        ></channel>
        <channel link="https://overcast.fm/itunes1493819242" logoName="overcast" name="Overcast"></channel>
        <channel link="http://pca.st/itunes/1493819242" logoName="pocketcast" name="Pocket Cast"></channel>
        <channel link="https://castro.fm/itunes/1493819242" logoName="castro" name="Castro"></channel>
        <channel link="http://castbox.fm/vic/1493819242" logoName="castbox" name="Castbox"></channel>
        <channel
          link="https://www.podchaser.com/f/pod/1493819242"
          logoName="podchaser"
          name="Podchaser"
        ></channel>
        <channel link="https://feeds.buzzsprout.com/793019.rss" logoName="rss" name="RSS Feed"></channel>
      </div>
    </template>
  </modal>
</template>

<script>
import { Modal } from "@/components";
import Channel from "@/components/custom/Channel";

export default {
  components: { Modal, Channel },
  name: "listen-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ModalHide() {
      this.$emit("hide");
    }
  }
};
</script>

<style lang="scss">
.modal-container {
  max-width: 700px;
}

.modal-header h3 {
  color: #2b557d !important;
  font-weight: 500;
  font-size: 35px;
}

.channels {
  margin-left: 2vw;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 600px) {
  .modal-header h3 {
    font-size: 20px;
  }
}
</style>
