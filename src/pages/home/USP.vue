<template>
  <article class="usp">
    <img
      class="usp__icon"
      :src="require(`@/assets/home/desktop/icon-${usp.img}.svg`)"
      :alt="usp.img"
    />
    <h3 class="usp__heading">
      {{ usp.heading }}
    </h3>
    <p class="usp__paragraph">
      {{ usp.paragraph }}
    </p>
  </article>
</template>

<script>
export default {
  name: "USP",
  props: {
    usp: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.usp {
  background-color: $color-cyan;
  margin: 2rem 0;
  padding: 6rem 2rem 4rem 2rem;
  border-radius: $br-medium;

  &__icon {
    margin-bottom: 3rem;
  }

  &__heading {
    margin-bottom: 2rem;
  }
}
</style>
