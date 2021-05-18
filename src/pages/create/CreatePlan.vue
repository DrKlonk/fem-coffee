<template>
  <HeroImage img-class="create-plan">
    <template v-slot:heading>create plan.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
  </HeroImage>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage.vue"
export default {
  components: { HeroImage },
  name: "CreatePlan",
}
</script>
