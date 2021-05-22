<template>
  <section class="hero-image" :class="imgClass">
    <div class="hero-image__container">
      <h1
        class="hero-image__heading"
        :class="{ 'hero-image__heading--small': smallerHeading }"
      >
        <slot name="heading"></slot>
      </h1>
      <p
        class="hero-image__paragraph"
        :class="{ 'm-bottom-medium': hasButtonSlot }"
      >
        <slot name="text"></slot>
      </p>
      <slot name="button"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroImage",
  props: {
    imgClass: String,
    smallerHeading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasButtonSlot() {
      return !!this.$slots.button
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  background-image: url("~@/assets/home/mobile/image-hero-coffeepress.jpg");
  @include respond(tab-port) {
    background-image: url("~@/assets/home/tablet/image-hero-coffeepress.jpg");
  }
  @include respond(tab-land) {
    background-image: url("~@/assets/home/desktop/image-hero-coffeepress.jpg");
  }
}
.about {
  background-image: url("~@/assets/about/mobile/image-hero-whitecup.jpg");
  @include respond(tab-port) {
    background-image: url("~@/assets/about/tablet/image-hero-whitecup.jpg");
  }
  @include respond(desktop) {
    background-image: url("~@/assets/about/desktop/image-hero-whitecup.jpg");
  }
}
.create-plan {
  background-image: url("~@/assets/plan/mobile/image-hero-blackcup.jpg");
  @include respond(tab-port) {
    background-image: url("~@/assets/plan/tablet/image-hero-blackcup.jpg");
  }
  @include respond(desktop) {
    background-image: url("~@/assets/plan/desktop/image-hero-blackcup.jpg");
  }
}
.hero-image {
  min-height: 25rem;
  border-radius: 1rem;
  padding: 6rem 1.5rem;
  background-size: cover;
  color: $color-light-cream;
  text-align: center;

  @include respond(tab-port) {
    background-position: right;
    text-align: left;
    padding-bottom: 2rem;
    &__container {
      width: 23rem;
    }
  }

  @include respond(tab-land) {
    padding: 6rem 2.5rem;
  }

  &__heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    line-height: 2.5rem;
    &--small {
      font-size: 1.75rem;
    }
    @include respond(tab-land) {
      font-size: 4.5rem;
      width: 32rem;
      line-height: 4.5rem;
    }
  }

  &__paragraph {
    font-size: 0.9375rem;
    line-height: 1.6rem;
    color: rgba($color-light-cream, 0.8);

    @include respond(tab-land) {
      width: 25rem;
    }
  }
}
</style>
