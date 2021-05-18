<template>
  <div
    id="burger"
    :class="{ active: isBurgerActive }"
    @click.prevent="toggleCollapse"
  >
    <button class="burger-button" title="Menu" type="button">
      <span class="burger-bar burger-bar--1"></span>
      <span class="burger-bar burger-bar--2"></span>
      <span class="burger-bar burger-bar--3"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  data() {
    return {
      isBurgerActive: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isBurgerActive = !this.isBurgerActive;
    },
  },
};
</script>

<style scoped>
.burger-button {
  position: relative;
  background-color: transparent;
  border: none;
  padding: 1rem;
  outline: 0;
  font-family: inherit;
  cursor: pointer;
}
.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: ##ccc;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}
</style>
