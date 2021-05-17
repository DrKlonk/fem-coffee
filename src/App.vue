<template>
  <div class="container">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/ui/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fraunces&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
#app {
  /* font-family: Fraunces, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-cyan;
  margin-top: 60px;
}
</style>
