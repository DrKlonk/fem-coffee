<template>
  <HeroImage img-class="create-plan">
    <template v-slot:heading>Create a plan</template>
    <template v-slot:text
      >Build a subscription plan that best fits your needs. We offer an
      assortment of the best artisan coffees from around the globe delivered
      fresh to your door.</template
    >
  </HeroImage>
  <Steps :dark-mode="true" />
</template>

<script>
import HeroImage from "@/components/shared/HeroImage"
import Steps from "@/components/shared/Steps.vue"
export default {
  data() {
    return {
      state: {
        test: true,
      },
    }
  },
  components: { HeroImage, Steps },
  name: "CreatePlan",
}
</script>

<style lang="scss">
.steps {
  margin-top: 6rem;
}
</style>
