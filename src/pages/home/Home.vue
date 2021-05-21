<template>
  <HeroImage img-class="home">
    <template v-slot:heading>Great coffee made simple.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
    <template v-slot:button><AppButton @clicked="goToCreatePlan"/></template>
  </HeroImage>

  <section class="our-collection">
    <h2 class="our-collection__heading">our collection</h2>
    <ul class="our-collection__list">
      <li
        class="our-collection__item"
        v-for="coffee in localCoffeeCollection"
        :key="coffee"
      >
        <coffee :coffee="coffee" />
      </li>
    </ul>
  </section>

  <section class="why-us">
    <h2 class="why-us__heading">Why choose us?</h2>
    <p class="why-us__paragraph">
      A large part of our role is choosing which particular coffees will be
      featured in our range. This means working closely with the best coffee
      growers to give you a more impactful experience on every level.
    </p>
    <ul class="why-us__list">
      <li class="why-us__item" v-for="usp in localUsps" :key="usp">
        <USP :usp="usp" />
      </li>
    </ul>
  </section>

  <section class="how-it-works">
    <h3 class="how-it-works__heading heading-grey">How it works</h3>
    <Steps />
  </section>

  <div class="btn-wrapper">
    <app-button @clicked="goToCreatePlan" />
  </div>
</template>

<script>
import HeroImage from "@/components/shared/HeroImage"
import AppButton from "@/components/ui/AppButton.vue"
import { coffeeCollection, uniqueSellingPoints } from "@/assets/content"
import Coffee from "@/pages/home/Coffee.vue"
import USP from "@/pages/home/USP.vue"
import Steps from "@/components/shared/Steps.vue"

export default {
  name: "Home",
  components: {
    AppButton,
    Coffee,
    HeroImage,
    Steps,
    USP,
  },
  data() {
    return {
      localCoffeeCollection: coffeeCollection,
      localUsps: uniqueSellingPoints,
    }
  },
  methods: {
    goToCreatePlan() {
      this.$router.push({ name: "CreatePlan" })
    },
  },
}
</script>

<style lang="scss">
.our-collection {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__heading {
    font-size: 2.5rem;
    background: -webkit-linear-gradient($color-grey, rgba($color-grey, 0.5));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__list {
    list-style: none;
    width: 100%;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.why-us {
  margin-top: 8rem;
  text-align: center;
  padding: 1.5rem;
  color: $color-light-cream;

  &::before {
    position: absolute;
    left: 1.5rem;
    z-index: -1;
    content: "";
    width: calc(100% - 3rem);
    height: 54rem;
    background-color: $color-dark-grey;
    border-radius: $br-large;
  }

  &__list {
    list-style: none;
  }

  &__heading {
    margin-top: 4rem;
    font-size: 1.75rem;
  }

  &__paragraph {
    margin-top: 1rem;
  }
}

.how-it-works {
  margin-top: 5rem;

  &__heading {
    text-align: center;
    color: $color-grey;
  }
}

.btn-wrapper {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
</style>
