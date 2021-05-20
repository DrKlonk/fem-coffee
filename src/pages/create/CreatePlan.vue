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
  <section class="order">
    <big-selection
      v-for="selection in localOrderSelections"
      :key="selection.category"
      :selection="selection"
      @option-selected="optionSelected"
    />
  </section>
</template>

<script>
import HeroImage from "@/components/shared/HeroImage"
import Steps from "@/components/shared/Steps.vue"
import { orderSelections } from "@/assets/js/plan.js"
import BigSelection from "./BigSelection.vue"
export default {
  data() {
    return {
      order: {
        method: null,
        type: null,
        amount: null,
        grind: null,
        delivery: null,
      },
      localOrderSelections: orderSelections,
    }
  },
  components: { HeroImage, Steps, BigSelection },
  name: "CreatePlan",
  methods: {
    optionSelected(e) {
      if (this.order[e.category] === e.value) {
        // Deselection
        this.order[e.category] = null
        return
      }
      this.order[e.category] = e.value
    },
  },
}
</script>

<style lang="scss">
.steps {
  margin-top: 6rem;
}
</style>
