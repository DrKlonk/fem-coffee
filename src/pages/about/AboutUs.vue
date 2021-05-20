<template>
  <HeroImage img-class="about" smaller-heading>
    <template v-slot:heading>About us</template>
    <template v-slot:text
      >Coffeeroasters began its journey of exotic discovery in 1999,
      highlighting stories of coffee from around the world. We have since been
      dedicated to bring the perfect cup - from bean to brew - in every
      shipment.</template
    >
  </HeroImage>
</template>

<script>
import HeroImage from "@/components/ui/HeroImage.vue"
export default {
  name: "About us",
  components: {
    HeroImage,
  },
}
</script>

<style lang="scss"></style>
