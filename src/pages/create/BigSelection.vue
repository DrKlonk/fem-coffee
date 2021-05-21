<template>
  <div class="big-selection">
    <header class="big-selection__header" @click="toggleCollapsed">
      <h4 class="big-selection__question">{{ selection.question }}</h4>
      <img
        class="big-selection__caret"
        :class="{ up: isCollapsed }"
        src="@/assets/plan/desktop/icon-arrow.svg"
      />
    </header>

    <template v-if="!isCollapsed">
      <big-selection-option
        v-for="option in selection.options"
        :key="option"
        :option="option"
        :current="selectedOption"
        @selected="emitSelectedOption"
      />
    </template>
  </div>
</template>

<script>
import BigSelectionOption from "./BigSelectionOption.vue"
export default {
  name: "Big selection",
  components: {
    BigSelectionOption,
  },
  data() {
    return {
      selectedOption: null,
      isCollapsed: true,
    }
  },
  props: {
    selection: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitSelectedOption(e) {
      this.selectedOption = e
      this.$emit("optionSelected", {
        category: this.selection.category,
        value: e,
      })
    },
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed
    },
  },
}
</script>

<style lang="scss">
.big-selection {
  margin-top: 3rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 2rem;
  }
  &__question {
    flex-basis: 15rem;
    color: $color-grey;
    font-size: 1.5rem;
  }

  &__caret {
    transform: rotate(0deg);
    transition: 0.5s transform;
    z-index: -1;
    &.up {
      transform: rotate(180deg);
    }
    &:hover {
      fill: $color-cyan-secondary;
    }
  }
}
</style>
