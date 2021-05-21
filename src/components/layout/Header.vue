<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <img
        class="logo"
        alt="Coffeeroasters"
        src="@/assets/shared/desktop/logo.svg"
      />
    </router-link>
    <Menu-button />
  </header>
</template>

<script>
import MenuButton from "@/components/menu/MenuButton.vue"
export default {
  name: "Header",
  components: {
    MenuButton,
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
