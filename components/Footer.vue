<template>
  <footer class="footer">
    <img :src="logo" alt="site logo" style="height: 40px" />
    <p class="text-xs text-dark">
      Omnia Coaching &#9400; 2023. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
  import logo from "../assets/images/logo.svg";
</script>

<style scoped>
  .footer {
    margin-top: var(--space-16);
    padding-block: var(--space-13);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-7);
  }

  @media screen and (min-width: 64rem) {
    .footer {
      margin-top: var(--space-20);
      flex-direction: row;
    }
  }
</style>
