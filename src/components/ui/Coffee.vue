<template>
  <article class="coffee">
    <img
      class="coffee__image"
      :src="require(`@/assets/home/desktop/image-${coffee.img}.png`)"
      :alt="coffee.img"
    />
    <h3 class="coffee__title">{{ coffee.title }}</h3>
    <p class="coffee__paragraph">{{ coffee.paragraph }}</p>
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

  &__image {
    width: 6rem;
    height: 6rem;
  }
  &__title {
    margin-top: 1rem;
  }
  &__paragraph {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.9375rem;
    line-height: 1.5625rem;
  }
}
</style>
