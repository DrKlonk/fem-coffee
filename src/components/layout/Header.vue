<template>
  <header class="header">
    <img
      class="logo"
      alt="Coffeeroasters"
      src="@/assets/shared/desktop/logo.svg"
    />
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

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 2rem 0;
}
.logo {
  width: 10rem;
}
</style>
