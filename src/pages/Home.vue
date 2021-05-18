<template>
  <HeroImage img-class="home">
    <template v-slot:heading>Great coffee made simple.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
    <template v-slot:button><AppButton /></template>
  </HeroImage>
  <section class="our-collection"></section>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage"
import AppButton from "../components/ui/AppButton.vue"
export default {
  name: "Home",
  components: {
    HeroImage,
    AppButton,
  },
}
</script>

<style></style>
