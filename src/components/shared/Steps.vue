<template>
  <ul class="steps">
    <li class="step" v-for="step in localSteps" :key="step">
      <Step :step="step" />
    </li>
  </ul>
</template>

<script>
import Step from "@/components/shared/Step.vue"
import { steps } from "@/assets/content.js"
export default {
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

<style>
.steps {
  list-style: none;
}
</style>
