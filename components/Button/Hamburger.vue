<template>
  <button
    class="button-one"
    @click="buttonClick"
    aria-controls="primary-navigation"
    :aria-expanded="isExpanded"
  >
    <svg
      fill="var(--button-color)"
      class="btn-hamburger"
      viewBox="0 0 100 100"
      width="40"
      height="40"
    >
      <!-- Update x attribute for the top line -->
      <rect class="line top" width="80" height="8" x="20" y="30" rx="5"></rect>

      <!-- Update x attribute for the bottom line -->
      <rect
        class="line bottom"
        width="80"
        height="8"
        x="20"
        y="60"
        rx="5"
      ></rect>
    </svg>
  </button>
</template>

<script setup>
  const emit = defineEmits(["toggleDrawer"]);
  const props = defineProps({ isExpanded: Boolean });

  const buttonClick = () => {
    emit("toggleDrawer");
  };
</script>

<style scoped>
  button {
    --transition-timing: 150ms;
    background: transparent;
    border: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    z-index: 2;
  }

  .button-one {
    --button-color: #333;
  }

  .button-one .line {
    transition: y var(--transition-timing) ease-in var(--transition-timing),
      rotate var(--transition-timing) ease-in;
    transform-origin: 60px center;
  }

  .button-one[aria-expanded="true"] .line {
    transition: y var(--transition-timing) ease-in,
      rotate var(--transition-timing) ease-in var(--transition-timing);
  }

  .button-one[aria-expanded="true"] :is(.top, .bottom) {
    y: 45;
  }

  .button-one[aria-expanded="true"] .top {
    rotate: 45deg;
  }

  .button-one[aria-expanded="true"] .bottom {
    rotate: -45deg;
  }
</style>
