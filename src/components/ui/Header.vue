<template>
  <header class="header">
    <Logo />
    <Menu />
  </header>
</template>
<script>
import Logo from "./Logo";
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: { Logo, Menu },
};
</script>
<style lang="scss"></style>
