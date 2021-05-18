<template>
  <div class="hero-image" :class="imgClass">
    <h1 class="hero-image__heading"><slot name="heading"></slot></h1>
    <p class="hero-image__paragraph"><slot name="text"></slot></p>
  </div>
</template>
<script>
export default {
  props: {
    imgClass: String,
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
  border-radius: 1rem;
  padding: 4rem 1.5rem;
  background-size: cover;
  color: $color-light-cream;
  text-align: center;

  &__heading {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    line-height: 2.5rem;
  }

  &__paragraph {
    font-size: 0.9375rem;
    line-height: 1.6rem;
    opacity: 0.8;
  }
}
.test {
  /* width: 100px;
  height: 100px; */
}
</style>
