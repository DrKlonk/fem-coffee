<template>
  <HeroImage img-class="create-plan">
    <template v-slot:heading>Create a plan</template>
    <template v-slot:text
      >Build a subscription plan that best fits your needs. We offer an
      assortment of the best artisan coffees from around the globe delivered
      fresh to your door.</template
    >
  </HeroImage>
</template>

<script>
import HeroImage from "@/components/shared/HeroImage"
export default {
  components: { HeroImage },
  name: "CreatePlan",
}
</script>
