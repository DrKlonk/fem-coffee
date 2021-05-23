<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        v-for="route in localRoutes"
        :key="route.name"
        class="navigation__item"
      >
        <router-link class="router-link" :to="{ name: route.name }">{{
          route.displayName
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "@/assets/routes"
export default {
  name: "NavBar",
  data() {
    return {
      localRoutes: routes,
    }
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  font-family: "Barlow";
  &__list {
    list-style: none;
    display: flex;
  }
}
.router-link {
  color: $color-dark-grey-blue;
  text-transform: uppercase;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: 0.05rem;
  color: rgba($color-grey, 0.5);

  &-active {
    color: $color-dark-grey;
  }
  &:hover {
    color: $color-dark-grey;
  }
  &:focus {
    outline: dotted $color-cyan 0.125rem;
    outline-offset: -0.125rem;
  }
}
</style>
