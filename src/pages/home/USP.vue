<template>
  <article class="usp">
    <img
      class="usp__icon"
      :src="require(`@/assets/home/desktop/icon-${usp.img}.svg`)"
      alt=""
    />
    <div class="usp__text-container">
      <h3 class="usp__heading">
        {{ usp.heading }}
      </h3>
      <p class="usp__paragraph">
        {{ usp.paragraph }}
      </p>
    </div>
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

  @include flex-col-center;

  @include respond(tab-port) {
    padding: 2rem;
    flex-direction: row;
    align-items: center;
  }
  @include respond(desktop) {
    flex-direction: column;
    max-width: 18rem;
  }

  &__icon {
    @include respond(tab-port) {
      padding: 1rem 2rem;
    }
    @include respond(desktop) {
      min-height: 7rem;
    }
  }

  &__heading {
    margin-bottom: 2rem;
    @include respond(tab-port) {
      margin-bottom: 1rem;
      text-align: left;
    }

    @include respond(desktop) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  &__paragraph {
    @include respond(tab-port) {
      text-align: left;
    }
    @include respond(desktop) {
      text-align: center;
    }
  }
}
</style>
