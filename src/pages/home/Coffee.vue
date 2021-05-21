<template>
  <article class="coffee">
    <img
      class="coffee__image"
      :src="require(`@/assets/home/desktop/image-${coffee.img}.png`)"
      :alt="coffee.img"
    />
    <div class="coffee__text-container">
      <h3 class="coffee__title">{{ coffee.title }}</h3>
      <p class="coffee__paragraph">{{ coffee.paragraph }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Coffee",
  props: {
    coffee: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.coffee {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  max-width: 18rem;
  @include respond(tab-port) {
    flex-direction: row;
    max-width: 30rem;
  }

  &__text-container {
    @include flex-col-center;
    @include respond(tab-port) {
      align-items: start;
    }
  }

  &__image {
    width: 6rem;
    height: 6rem;
    @include respond(tab-port) {
      width: 10rem;
      height: 10rem;
    }
  }
  &__title {
    margin-top: 1rem;
    text-align: center;
    @include respond(tab-port) {
      margin-top: 0;
      text-align: left;
    }
  }
  &__paragraph {
    margin-top: 1rem;
    text-align: center;
    @include respond(tab-port) {
      text-align: left;
    }
    font-size: 0.9375rem;
    line-height: 1.5625rem;
  }
}
</style>
