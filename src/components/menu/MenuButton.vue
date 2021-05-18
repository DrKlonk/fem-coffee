<template>
  <button
    class="menu-button"
    :class="{ active: isCollapsed }"
    @click="toggleCollapse"
  >
    Hoi
  </button>
</template>

<script>
export default {
  name: "MenuButton",
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.menu-button {
  background-color: transparent;
  border: none;
  /* padding: 1rem; */
  outline: 0;
  font-family: inherit;
}
.active {
  background-color: red;
}
</style>
