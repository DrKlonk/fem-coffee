<template>
  <ul class="steps" :class="{ dark: darkMode }">
    <li class="step-item" v-for="step in localSteps" :key="step">
      <template v-if="$windowWidth > 600">
        <div class="step__dot" />
        <div class="step__line" />
      </template>
      <Step :step="step" :dark-mode="darkMode" />
    </li>
  </ul>
</template>

<script>
import Step from "@/components/shared/Step.vue"
import { steps } from "@/assets/content.js"
export default {
  props: ["darkMode"],
  data() {
    return {
      localSteps: steps,
    }
  },
  components: {
    Step,
  },
}
</script>

<style lang="scss" scoped>
.steps {
  list-style: none;
  @include respond(tab-port) {
    display: flex;
  }
}
.step-item {
  position: relative;
  @include respond(tab-port) {
    &:not(:last-of-type) {
      margin-right: 2rem;

      .step__line {
        position: absolute;
        width: calc(100% + 2rem);
        height: 0.125rem;
        top: -1rem;
        left: 1rem;
        background: $color-pale-orange;
        z-index: -1;
      }
    }
    .step__dot {
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: -2rem;
      left: 0;
      border-radius: 50%;
      border: 2px solid $color-cyan;
      background: #fff;
    }
  }
}
.steps.dark {
  background-color: $color-dark-grey-blue;
  border-radius: $br-large;
  padding: 3rem 1.5rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  @include respond(tab-port) {
    padding: 8rem 3.5rem;
    margin-left: -3.5rem;
    margin-right: -3.5rem;
  }
  .step-item {
    .step__dot {
      background: transparent;
      z-index: 2;
    }
    .step__line {
      background-color: $color-pale-orange;
      z-index: 1;
    }
  }
}
</style>
