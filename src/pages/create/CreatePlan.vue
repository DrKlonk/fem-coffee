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
  <div class="order-container">
    <div v-if="$windowWidth >= 1200" class="order-menu">
      <ol class="order-menu__list">
        <li
          v-for="item in localOrderMenu"
          :key="item.id"
          class="order-menu__item"
        >
          <span class="order-menu__number">{{ item.number }}</span>
          <span class="order-menu__text">{{ item.text }}</span>
        </li>
      </ol>
    </div>
    <section class="order">
      <big-selection
        v-for="selection in localOrderSelections"
        :key="selection.category"
        :selection="selection"
        @option-selected="optionSelected"
        :disabled="determineDisabled(selection.category)"
      />
    </section>
  </div>
  <section class="order-summary">
    <h4 class="order-summary__heading">Order summary</h4>
    <p class="order-summary__paragraph" v-html="orderSummary"></p>
  </section>

  <div class="order-button">
    <app-button
      @clicked="$refs.orderModal.openModal()"
      :disabled="!isOrderComplete"
    >
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
import { orderSelections, orderMenu, pricingTable } from "@/assets/js/plan.js"

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
      localOrderMenu: orderMenu,
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
      console.log("order logged!")
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
      return (
        this.isOrderComplete &&
        `Checkout - ${pricingTable[this.order.amount][this.order.delivery]} / ${
          this.delivery
        }`
      )
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
    isOrderComplete() {
      const mandatoryFields = ["method", "type", "amount", "delivery"]
      const areMandatoryFieldsPresent = mandatoryFields.every((field) => {
        return this.order[field] != null
      })
      if (!areMandatoryFieldsPresent) {
        return false
      }
      if (this.order.method !== "Capsule") {
        return this.order.grind !== null
      }
      return true
    },
  },
}
</script>

<style lang="scss">
.steps {
  margin-top: 6rem;
}
.order-container {
  margin-top: 4rem;
  display: flex;
}

.order-menu {
  flex: 0 0 24rem;
  font-family: Fraunces, Georgia, "Times New Roman", Times, serif;
  font-size: 1.5rem;
  color: rgba($color-dark-grey-blue, 0.5);
  &__list {
    list-style: none;
    margin-right: 6rem;
  }
  &__item {
    padding: 1rem;
    &:not(:last-child) {
      border-bottom: 1px rgba($color-grey, 0.5) solid;
    }
  }
  &__number {
    display: inline-block;
    width: 4rem;
  }
}
.order {
  flex: 1 0;
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
