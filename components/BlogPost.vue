<template>
  <article class="blog-post h-stack">
    <p class="date text-xs text-dark">September 5, 2022</p>
    <NuxtLink
      class="card-content card v-stack"
      target="_blank"
      rel="noopener"
      to="https://www.bloomberg.com/quote/GOOG:US"
    >
      <h2 class="text-base font-semibold text-darker">
        What to know about exercise and how to start
      </h2>
      <p class="text-xs text-dark">
        Exercise involves engaging in physical activity and increasing the heart
        rate beyond resting levels. It is an important part of preserving
        physical and mental health.
      </p>
      <p
        class="text-xs font-medium text-primary h-stack"
        style="--h-gap: var(--space-5)"
      >
        Read Article <img :src="chevron" alt="icon" style="width: 8px" />
      </p>
    </NuxtLink>
    <div class="spacer"></div>
  </article>
</template>

<script setup>
  import chevron from "../assets/icons/chevron-right-solid.svg";
</script>

<style scoped>
  .blog-post {
    align-items: baseline;
    gap: 0;
  }
  .blog-post > p {
    white-space: nowrap;
    display: none;
  }

  .card-content {
    cursor: pointer;
    text-wrap: balance;
    margin-bottom: var(--space-3);
    background-color: transparent;
    padding-left: 0;

    transition: background-color 300ms ease-in-out;
  }

  @media screen and (hover: hover) {
    .card-content:hover {
      background-color: hsl(var(--clr-neutral-200));
    }
  }

  @media screen and (min-width: 64rem) {
    .blog-post {
      gap: var(--space-13);
    }
    .blog-post > p {
      display: block;
    }

    .card-content {
      max-width: 80ch;
      padding-left: var(--space-9);
    }

    .spacer {
      margin-left: auto;
    }
  }
</style>
