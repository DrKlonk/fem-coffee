<template>
  <HeroImage img-class="about">
    <template v-slot:heading>About us.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
  </HeroImage>
  <h1>Home</h1>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage.vue"
export default {
  name: "About us",
  components: {
    HeroImage,
  },
}
</script>

<style lang="scss"></style>
