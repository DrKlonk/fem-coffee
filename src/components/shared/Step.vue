<template>
  <div class="step">
    <h2 class="step__number">{{ step.number }}</h2>
    <h1 class="step__heading" :class="{ dark: darkMode }">
      {{ step.heading }}
    </h1>
    <p class="step__paragraph" :class="{ dark: darkMode }">
      {{ step.paragraph }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Step",
  props: {
    step: {
      type: Object,
      required: true,
    },
    darkMode: {
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.step {
  text-align: center;
  margin-top: 3rem;
  &__number {
    color: $color-pale-orange;
    font-size: 4.5rem;
  }
  &__heading {
    margin-top: 1rem;
    font-size: 1.75rem;
  }
  &__paragraph {
    margin-top: 2rem;
  }
}
.dark {
  color: $color-light-cream;
}
</style>
