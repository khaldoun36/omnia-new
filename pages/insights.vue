<template>
  <section class="insights-header v-stack">
    <h1 class="text-5xl font-bold text-darker">
      Exploring the dynamics of weight loss, optimal training intensity, and
      cutting-edge dieting tools
    </h1>
    <p class="text-base text-dark">
      All of my long-form thoughts on programming, leadership, product design,
      and more, collected in chronological order.
    </p>
  </section>
  <main class="insights-container">
    <BlogPost v-for="n in 10" />
  </main>
</template>

<script setup></script>

<style scoped>
  .insights-header {
    margin-top: var(--space-21);
  }
  .insights-header > h1 {
    max-width: 30ch;
  }
  .insights-header > p {
    max-width: 60ch;
  }
</style>
