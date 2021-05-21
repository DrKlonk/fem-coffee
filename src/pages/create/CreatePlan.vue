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
      :disabled="determineDisabled(selection.category)"
    />
  </section>
  <section class="order-summary">
    <h4 class="order-summary__heading">Order summary</h4>
    <p class="order-summary__paragraph" v-html="determineOrderSummary"></p>
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
      this.order[e.category] = e.value
    },
    determineDisabled(category) {
      return this.order.method === "Capsule" && category === "grind"
    },
  },
  computed: {
    determineOrderSummary() {
      const method = `I drink my coffee ${
        this.order.method == "Capsule" ? "using" : "as"
      } <span class="order-summary__option">${this.order.method ??
        "____"}</span>,`

      const bean = `with a <span class="order-summary__option">${this.order
        .type ?? "____"}</span> type of bean.`

      const amount = `<span class="order-summary__option">${this.order.amount ??
        "____"}</span>`

      const grind =
        this.order.method === "Capsule"
          ? ""
          : `ground ala <span class="order-summary__option">${this.order
              .grind ?? "____"}</span>`

      const delivery = `, sent to me <span class="order-summary__option">${this
        .order.delivery ?? "____"}</span>`

      return `\`\`${method} ${bean} ${amount} ${grind} ${delivery}\`\``
    },
  },
}
</script>

<style lang="scss">
.steps {
  margin-top: 6rem;
}
.order-summary {
  background-color: $color-dark-grey-blue;
  padding: 1.5rem;
  border-radius: $br-large;
  margin-top: 5rem;

  &__heading {
    color: $color-grey;
    text-transform: uppercase;
    font-family: "Barlow";
    font-size: 0.9375rem;
  }
  &__paragraph {
    color: $color-light-cream;
    font-family: "Fraunces";
    font-size: 1.5rem;
  }
  &__option {
    color: $color-cyan;
  }
}
</style>
