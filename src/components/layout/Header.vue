<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <img
        class="logo"
        alt="Coffeeroasters"
        src="@/assets/shared/desktop/logo.svg"
      />
    </router-link>
    <Menu-button v-if="$windowWidth < 600" />
    <NavBar v-else />
  </header>
</template>

<script>
import MenuButton from "@/components/menu/MenuButton.vue"
import NavBar from "@/components/menu/NavBar.vue"
export default {
  name: "Header",
  data() {
    return {
      innerWidth: window.innerWidth,
    }
  },
  components: {
    MenuButton,
    NavBar,
  },
  methods: {
    setInnerWidth() {
      return function() {
        this.innerWidth = window.innerWidth
      }
    },
  },
  computed: {
    viewPortWidth() {
      return window.innerWidth
    },
  },
  mounted() {
    window.addEventListener("resize", this.setInnerWidth)
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setInnerWidth)
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  left: 0;
  top: 0;
  width: calc(100%+7rem);
  padding: 3rem 3.5rem;
  margin-left: -3.5rem;
  margin-right: -3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 100;
  @include respond(tab-port) {
  }
}
.logo {
  width: 10rem;
}
</style>
