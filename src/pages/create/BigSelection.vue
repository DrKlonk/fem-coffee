<template>
  <div class="big-selection">
    <header class="big-selection__header">
      <h3 class="big-selection__question">{{ selection.question }}</h3>
      <img
        class="big-selection__caret"
        src="@/assets/plan/desktop/icon-arrow.svg"
      />
    </header>
    <big-selection-option
      v-for="option in selection.options"
      :key="option"
      :option="option"
      @selected="optionSelected"
    />
  </div>
</template>

<script>
import BigSelectionOption from "./BigSelectionOption.vue"
export default {
  name: "Big selection",
  components: {
    BigSelectionOption,
  },
  props: {
    selection: {
      type: Object,
      required: true,
    },
  },
  methods: {
    optionSelected(e) {
      this.$emit("optionSelected", {
        category: this.selection.category,
        value: e,
      })
    },
  },
}
</script>

<style lang="scss">
.big-selection {
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  &__question {
    font-size: 2rem;
  }
}
</style>
