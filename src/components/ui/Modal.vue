<template>
  <transition name="fade">
    <div class="modal" v-if="show" @click="closeModal()">
      <div class="modal__backdrop" />

      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header" />
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>

        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
    }
  },
  methods: {
    closeModal() {
      this.show = false
      document.querySelector("body").classList.remove("overflow-hidden")
    },
    openModal() {
      this.show = true
      document.querySelector("body").classList.add("overflow-hidden")
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    border-radius: $br-large;
    background-color: $color-light-cream;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__header {
    padding: 1.5rem;
    background: $color-dark-grey-blue;
    color: $color-light-cream;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  &__body {
    padding: 1.5rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    display: flex;
    justify-content: center;
    padding-bottom: 1.5rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
