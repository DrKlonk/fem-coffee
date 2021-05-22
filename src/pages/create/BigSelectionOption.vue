<template>
  <div class="option" @click="selectOption" :class="{ selected: isSelected }">
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
    current: {
      type: String,
      default: null,
    },
  },
  methods: {
    selectOption() {
      this.$emit("selected", this.option.title)
    },
  },
  computed: {
    isSelected() {
      return this.current === this.option.title
    },
  },
}
</script>

<style lang="scss" scoped>
.option {
  &:not(:last-child) {
    margin-bottom: 1rem;
    @include respond(tab-port) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
  @include respond(desktop) {
    min-height: 13rem;
  }
  background-color: $color-big-selection;
  border-radius: $br-small;
  padding: 1.5rem;

  &:hover {
    background-color: $color-big-selection-hover;
  }

  &__text {
    margin-top: 1rem;
  }
}
.selected {
  background-color: $color-cyan;
  color: $color-light-cream;
}
</style>
