<template>
  <HeroImage img-class="about" smaller-heading>
    <template v-slot:heading>About us</template>
    <template v-slot:text
      >Coffeeroasters began its journey of exotic discovery in 1999,
      highlighting stories of coffee from around the world. We have since been
      dedicated to bring the perfect cup - from bean to brew - in every
      shipment.</template
    >
  </HeroImage>

  <section class="our-commitment">
    <img
      class="our-commitment__image"
      src="@/assets/about/mobile/image-commitment.jpg"
    />
    <h3 class="our-commitment__heading">
      Our commitment
    </h3>
    <p class="our-commitment__paragraph">
      We’re built on a simple mission and a commitment to doing good along the
      way. We want to make it easy for you to discover and brew the world’s best
      coffee at home. It all starts at the source. To locate the specific lots
      we want to purchase, we travel nearly 60 days a year trying to understand
      the challenges and opportunities in each of these places. We collaborate
      with exceptional coffee growers and empower a global community of farmers
      through with well above fair-trade benchmarks. We also offer training,
      support farm community initiatives, and invest in coffee plant science.
      Curating only the finest blends, we roast each lot to highlight tasting
      profiles distinctive to their native growing region.
    </p>
  </section>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage.vue"
export default {
  name: "About us",
  components: {
    HeroImage,
  },
}
</script>

<style lang="scss">
.our-commitment {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__image {
    margin-top: 5rem;
    width: 100%;
    border-radius: $br-large;
  }
  &__heading {
    margin-top: 2rem;
  }
  &__paragraph {
    margin-top: 1rem;
    text-align: center;
  }
}
</style>
