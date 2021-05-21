<template>
  <div class="sidebar">
    <transition name="slide">
      <nav v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <li
            v-for="route in localRoutes"
            :key="route.name"
            class="sidebar-panel-nav__item"
            @click.prevent="closeSidebarPanel"
          >
            <router-link class="router-link" :to="{ name: route.name }">{{
              route.displayName
            }}</router-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import { store, mutations } from "@/store/store"
import { routes } from "@/assets/routes"
export default {
  name: "Sidebar",
  data() {
    return {
      localRoutes: routes,
    }
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen
    },
  },

  methods: {
    closeSidebarPanel() {
      mutations.toggleNav()
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-panel {
  overflow-y: auto;
  background-image: linear-gradient(
    to bottom,
    #fff,
    #fff 20rem,
    rgba(#fff, 0.5)
  );
  position: fixed;
  left: 0;
  top: 6rem;
  height: calc(100vh - 6rem);
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 100vw;

  &-nav {
    list-style: none;
    text-align: center;
    font-family: "Fraunces";
    font-size: 1.5rem;

    &__item {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
}

.router-link {
  color: $color-dark-grey-blue;
  text-decoration: none;
  padding: 1rem;
}
</style>
