<template>
  <footer class="footer">
    <img
      src="@/assets/shared/desktop/logo-white.svg"
      class="footer__logo"
      alt="Coffeeroasters"
    />
    <ul class="footer__links">
      <li
        v-for="route in localRoutes"
        :key="route.name"
        class="footer__link-element"
        @click.prevent="closeSidebarPanel"
      >
        <router-link class="router-link" :to="{ name: route.name }">{{
          route.displayName
        }}</router-link>
      </li>
    </ul>

    <ul class="footer__socials">
      <li class="facebook">
        <img
          class="social-icon"
          src="~@/assets/shared/desktop/icon-facebook.svg"
        />
      </li>
      <li class="twitter">
        <img
          class="social-icon"
          src="~@/assets/shared/desktop/icon-twitter.svg"
        />
      </li>
      <li class="instagram">
        <img
          class="social-icon"
          src="~@/assets/shared/desktop/icon-instagram.svg"
        />
      </li>
    </ul>
  </footer>
</template>

<script>
import { routes } from "@/assets/routes"
export default {
  name: "Footer",
  data() {
    return { localRoutes: routes }
  },
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: $color-dark-grey-blue;
  margin-top: 8rem;
  margin-bottom: 3rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    fill: white !important;
  }
  &__links {
    margin-top: 3rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__link-element {
    margin: 1rem 0;
  }
  &__socials {
    margin-top: 3rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 9rem;
  }
}
.router-link {
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Barlow";
  font-weight: 700;
  letter-spacing: 0.0625rem;

  &:visited {
    color: $color-grey;
  }
  &:hover,
  &:focus,
  &:active {
    color: $color-pale-orange;
  }
}

.social-icon {
  width: 2rem;
}
</style>
