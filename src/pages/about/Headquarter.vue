<template>
  <div class="headquarter">
    <img
      class="headquarter__image"
      :src="
        require(`@/assets/about/desktop/illustration-${headquarter.illustration}.svg`)
      "
    />
    <h3 class="headquarter__country">{{ headquarter.country }}</h3>
    <address class="headquarter__address">
      <p
        class="headquarter__address-line"
        v-for="addressLine in headquarter.addressDetails"
        :key="addressLine"
      >
        {{ addressLine }}
      </p>
    </address>
  </div>
</template>

<script>
export default {
  name: "Headquarter",
  props: {
    headquarter: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.headquarter {
  @include flex-col-center;
  @include respond(tab-port) {
    align-items: start;
    width: 14rem;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  &__image {
    margin-top: 6rem;
    min-height: 4rem;
  }
  &__country {
    margin-top: 3rem;
    @include respond(tab-port) {
      font-size: 1.5rem;
    }
  }
  &__address {
    margin-top: 2rem;
    @include flex-col-center;
    @include respond(tab-port) {
      align-items: start;
    }
  }
  &__address-line {
    font-style: normal;
    &:not(:last-of-type) {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
