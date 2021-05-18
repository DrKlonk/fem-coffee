<template>
  <div class="container">
    <Header />
    <Sidebar />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/layout/Header"
import Sidebar from "@/components/menu/Sidebar"

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
</style>
