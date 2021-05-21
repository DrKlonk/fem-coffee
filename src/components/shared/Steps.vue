<template>
  <ul class="steps" :class="{ dark: darkMode }">
    <li class="step-item" v-for="step in localSteps" :key="step">
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
  @include respond(tab-port) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
}
.dark {
  background-color: $color-dark-grey-blue;
  border-radius: $br-large;
  padding: 3rem 0;
}
</style>
