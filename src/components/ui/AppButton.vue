<template>
  <button class="btn" :disabled="disabled" @click="$emit('clicked')">
    <slot>
      Create your plan
    </slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1.125rem;
  outline: none;
  padding: 1rem 2rem;
  background-color: $color-cyan;
  font-family: "Fraunces";
  border: none;
  border-radius: 0.375rem;
  color: $color-light-cream;
  cursor: pointer;
  &:focus {
    outline: dotted $color-light-cream 2px;
    outline-offset: -2px;
  }
  &:hover {
    background-color: $color-cyan-secondary;
  }
  &:disabled {
    background-color: $color-light-cream-secondary;
  }
}
</style>
