<template>
  <button class="btn" @click="routerPush">
    <slot>
      Create your plan
    </slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    link: {
      type: String,
      default: "create-plan",
    },
  },
  methods: {
    routerPush() {
      this.$router.push(this.link)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  outline: none;
  padding: 1rem 2rem;
  background-color: $color-cyan;
  font-family: "Fraunces";
  border: none;
  border-radius: 0.375rem;
  color: $color-light-cream;
}
</style>
