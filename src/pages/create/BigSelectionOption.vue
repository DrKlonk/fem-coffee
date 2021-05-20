<template>
  <div class="option" @click="selectOption">
    <h4 class="option__title">{{ option.title }}</h4>
    <p class="option__text">{{ option.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectOption() {
      console.log(this.option)
      this.$emit("selected", this.option.title)
    },
  },
}
</script>

<style lang="scss" scoped>
.option {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  background-color: $color-big-selection;
  border-radius: $br-small;
  padding: 1.5rem;

  &:hover {
    background-color: $color-big-selection-hover;
  }
  &:active {
    background-color: $color-cyan;
    color: $color-light-cream;
  }

  &__text {
  }
}
</style>
