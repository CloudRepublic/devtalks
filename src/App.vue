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
    if (window.location.protocol !== "https") {
      window.location.href = `https://${window.location.host}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
