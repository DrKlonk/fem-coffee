<template>
  <div class="container">
    <Header />
    <Sidebar />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Sidebar from "@/components/menu/Sidebar"

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Sidebar,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow&display=swap");
@import "@/scss/main.scss";
.main {
  margin-top: 6rem;
}
</style>
