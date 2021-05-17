<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/createPlan">Create plan</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped></style>
