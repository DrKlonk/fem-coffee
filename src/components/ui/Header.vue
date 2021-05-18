<template>
  <header class="header">
    <Logo />
    <Menu />
  </header>
</template>

<script>
import Logo from "./Logo";
import Menu from "../menu/MenuButton.vue";

export default {
  name: "Header",
  components: { Logo, Menu },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 2rem 0;
}
</style>
