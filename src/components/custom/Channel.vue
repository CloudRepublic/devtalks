<template>
  <div class="channel">
    <a :href="link" target="_blank">
      <img class="logo" :src="logo" :alt="name" />
      <span class="title">{{ name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "channel",
  props: {
    link: {
      type: String,
      default: ""
    },
    logoName: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    logo() {
      return require("@/assets/img/channel-logos/" + this.logoName + ".png");
    }
  }
};
</script>

<style lang="scss" scoped>
.channel {
  flex: 0 50%;
  text-align: left;
  margin-top: 2vh;
}
.logo {
  max-width: 33px;
  margin-right: 0.5vw;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 15px;
  }

  .logo {
    margin-right: 2vw;
  }
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 12px;
  }

  .logo {
    margin-right: 2vw;
  }
}
</style>
