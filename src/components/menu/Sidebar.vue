<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebar-panel-nav">
          <li class="sidebar-panel-nav__item">
            <router-link class="router-link" :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li class="sidebar-panel-nav__item">
            <router-link class="router-link" :to="{ name: 'About' }"
              >About us</router-link
            >
          </li>
          <li class="sidebar-panel-nav__item">
            <router-link class="router-link" :to="{ name: 'CreatePlan' }"
              >Create your plan</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    isPanelOpen: true,
  }),
  methods: {
    closeSidebarPanel() {
      this.isPanelOpen = false
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

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-image: linear-gradient(
    to bottom,
    $color-light-cream,
    $color-light-cream 300px,
    rgba($color-light-cream, 0.5)
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
    font-size: 1.2rem;

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
}
</style>
