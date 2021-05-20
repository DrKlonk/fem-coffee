<template>
  <section class="hero-image" :class="imgClass">
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
}
.about {
  background-image: url("~@/assets/about/mobile/image-hero-whitecup.jpg");
}
.create-plan {
  background-image: url("~@/assets/plan/mobile/image-hero-blackcup.jpg");
}
.hero-image {
  min-height: 25rem;
  border-radius: 1rem;
  padding: 6rem 1.5rem;
  background-size: cover;
  color: $color-light-cream;
  text-align: center;

  &__heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    line-height: 2.5rem;
    &--small {
      font-size: 1.75rem;
    }
  }

  &__paragraph {
    font-size: 0.9375rem;
    line-height: 1.6rem;
    color: rgba($color-light-cream, 0.8);
  }
}
</style>
