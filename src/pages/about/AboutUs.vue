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
      v-if="$windowWidth < 600"
      class="image our-commitment__image"
      src="@/assets/about/mobile/image-commitment.jpg"
      alt="A guy making coffee"
    />
    <img
      v-else-if="$windowWidth < 900"
      class="image our-commitment__image"
      src="@/assets/about/tablet/image-commitment.jpg"
      alt="A guy making coffee"
    />
    <img
      v-else
      class="image our-commitment__image"
      src="@/assets/about/desktop/image-commitment.jpg"
      alt="A guy making coffee"
    />

    <div class="our-commitment__text-container">
      <h3 class="our-commitment__heading">
        Our commitment
      </h3>
      <p class="our-commitment__paragraph">
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </p>
    </div>
  </section>

  <section class="quality-statement">
    <img
      class="image quality-statement__image"
      src="@/assets/about/mobile/image-quality.jpg"
    />
    <h3 class="quality-statement__heading">Uncompromising quality</h3>
    <p class="quality-statement__paragraph">
      Although we work with growers who pay close attention to all stages of
      harvest and processing, we employ, on our end, a rigorous quality control
      program to avoid over-roasting or baking the coffee dry. Every bag of
      coffee is tagged with a roast date and batch number. Our goal is to roast
      consistent, user-friendly coffee, so that brewing is easy and enjoyable.
    </p>
  </section>

  <section class="our-headquarters">
    <h4 class="our-headquarters__heading">Our headquarters</h4>
    <div class="our-headquarters__container">
      <Headquarter v-for="hq in localHqs" :key="hq.country" :headquarter="hq" />
    </div>
  </section>
</template>

<script>
import HeroImage from "@/components/shared/HeroImage"
import Headquarter from "./Headquarter.vue"
import { headquarters } from "@/assets/content.js"
export default {
  name: "About us",
  components: {
    HeroImage,
    Headquarter,
  },
  data() {
    return {
      localHqs: headquarters,
    }
  },
}
</script>

<style scoped lang="scss">
.image {
  border-radius: $br-large;
  width: 100%;
}
.our-commitment {
  margin-top: 4rem;
  @include flex-col-center;
  @include respond(tab-port) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @include respond(tab-port) {
    max-width: 54rem;
    margin: 3rem auto;
  }
  &__image {
    border-radius: $br-large;
    width: 100%;
    @include respond(tab-port) {
      width: 18rem;
    }
  }
  &__text-container {
    @include flex-col-center;
    @include respond(tab-port) {
      margin-left: 2rem;
      align-items: start;
      padding: 2rem;
    }
  }
  &__heading {
    margin-top: 2rem;
    @include respond(tab-port) {
      text-align: left;
    }
  }
  &__paragraph {
    margin-top: 1rem;
    text-align: center;
    @include respond(tab-port) {
      text-align: left;
    }
  }
}

.quality-statement {
  padding: 8rem 1.5rem 2rem 1.5rem;
  margin-top: 15rem;
  background-color: $color-dark-grey-blue;
  text-align: center;
  color: $color-light-cream;
  position: relative;
  border-radius: $br-large;
  z-index: -2;

  @include respond(tab-port) {
    padding: 14rem 4.5rem 3rem 4.5rem;
    margin-top: 20rem;
  }

  &__image {
    position: absolute;
    left: 1.5rem;
    top: 0;
    width: calc(100% - 3rem);
    transform: translateY(-50%);
    z-index: -1;
  }
  &__heading {
  }
  &__paragraph {
    margin-top: 2rem;
  }
}
.our-headquarters {
  margin-top: 8rem;

  &__heading {
    color: $color-grey;
    text-align: center;
    @include respond(tab-port) {
      text-align: left;
    }
  }

  &__container {
    @include respond(tab-port) {
      display: flex;
      justify-content: start;
    }
  }
}
</style>
