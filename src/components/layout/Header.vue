<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <img
        class="logo"
        alt="Coffeeroasters"
        src="@/assets/shared/desktop/logo.svg"
      />
    </router-link>
    <Menu-button v-if="innerWidth < 400" />
    <!-- <NavBar v-else> -->
  </header>
</template>

<script>
import MenuButton from "@/components/menu/MenuButton.vue"
export default {
  name: "Header",
  data() {
    return {
      innerWidth: window.innerWidth,
    }
  },
  components: {
    MenuButton,
  },
  computed: {
    viewPortWidth() {
      return window.innerWidth
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth
    })
  },
  beforeUnmount() {
    window.removeEventListener("resize")
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: #fff;
}
.logo {
  width: 10rem;
}
</style>
