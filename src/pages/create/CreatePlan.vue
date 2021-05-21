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
    <p class="order-summary__paragraph" v-html="orderSummary"></p>
  </section>

  <div class="order-button">
    <app-button @clicked="$refs.orderModal.openModal()">
      Create my plan!
    </app-button>
  </div>

  <Modal ref="orderModal">
    <template v-slot:header>
      <h3>Order summary</h3>
    </template>
    <template v-slot:body
      ><p
        class="order-summary__paragraph order-summary__paragraph--modal"
        v-html="orderSummary"
      ></p>
      <p>
        Is this correct? You can proceed to checkout or go back to plan
        selection if something is off. Subscription discount codes can also be
        redeemed at the checkout.
      </p></template
    >
    <template v-slot:footer>
      <AppButton @clicked="logOrder">{{ checkoutCosts }}</AppButton>
    </template>
  </Modal>
</template>

<script>
import AppButton from "@/components/ui/AppButton.vue"
import BigSelection from "./BigSelection.vue"
import HeroImage from "@/components/shared/HeroImage"
import Modal from "@/components/ui/Modal.vue"
import Steps from "@/components/shared/Steps.vue"
import { orderSelections, pricingTable } from "@/assets/js/plan.js"

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
      showModal: true,
    }
  },
  components: { HeroImage, Steps, BigSelection, AppButton, Modal },
  name: "CreatePlan",
  methods: {
    optionSelected(e) {
      this.order[e.category] = e.value
    },
    determineDisabled(category) {
      return this.order.method === "Capsule" && category === "grind"
    },
    logOrder() {
      console.log("test")
    },
  },
  computed: {
    orderSummary() {
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
    checkoutCosts() {
      return `Checkout - ${
        pricingTable[this.order.amount][this.order.delivery]
      } / ${this.delivery}`
    },
    delivery() {
      let delivery = "mo"
      if (this.order.delivery === "Every week") {
        delivery = "week"
      }
      if (this.order.delivery === "Every 2 weeks") {
        delivery = "2 weeks"
      }
      return delivery
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
    &--modal {
      color: $color-grey;
    }
  }
  &__option {
    color: $color-cyan;
  }
}

.order-button {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
