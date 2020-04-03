<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.location.hostname === "devtalks.nl") {
      window.location.href = `https://www.devtalks.nl${window.location.pathname}`;
    }
  }
};
</script>
<style lang="scss" scoped></style>
