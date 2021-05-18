<template>
  <HeroImage img-class="home">
    <template v-slot:heading>Great coffee made simple.</template>
    <template v-slot:text
      >Start your mornings with the world’s best coffees. Try our expertly
      curated artisan coffees from our best roasters delivered directly to your
      door, at your schedule.</template
    >
    <template v-slot:button><AppButton /></template>
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
    <ul>
      <li>Best quality</li>
      <li>Exclusive benefits</li>
    </ul>
  </section>

  <section class="how-it-works">
    <ul>
      <li>Pick your coffee</li>
      <li>Choose the frequency</li>
    </ul>
    <AppButton />
  </section>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage"
import AppButton from "@/components/ui/AppButton.vue"
import { coffeeCollection } from "@/assets/content"
import Coffee from "@/components/ui/Coffee.vue"
export default {
  name: "Home",
  components: {
    HeroImage,
    AppButton,
    Coffee,
  },
  data() {
    return {
      localCoffeeCollection: coffeeCollection,
    }
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
</style>
