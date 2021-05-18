<template>
  <HeroImage img="home/desktop/image-piccollo.png">
    <template v-slot:heading>Great coffee made simple.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
  </HeroImage>
  <h1>Home</h1>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage";
export default {
  name: "Home",
  components: {
    HeroImage,
  },
};
</script>

<style></style>
