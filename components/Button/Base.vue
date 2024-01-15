<template>
  <button class="btn" :class="variant">
    <slot />
  </button>
</template>

<script setup>
  const props = defineProps({ variant: String });
</script>

<style scoped>
  :global(.btn) {
    --btn-height: var(--space-13);
    --btn-padding: var(--space-8);

    cursor: pointer;

    height: var(--btn-height);
    padding-inline: var(--btn-padding);
    border: 0;
    border-radius: var(--border-radius-2);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background 250ms ease-in-out;
  }

  .btn.primary,
  .btn.secondary {
    font: var(--fs-100);
    font-weight: 600;
  }

  .btn.primary {
    --clr-btn: var(--clr-primary-500);
    --clr-btn-hover: var(--clr-primary-700);
    --clr-btn-text-dark: var(--clr-neutral-50);

    background-color: hsl(var(--clr-btn));
    color: hsl(var(--clr-btn-text-dark));
  }

  .btn.secondary {
    --clr-btn: var(--clr-primary-500);
    --clr-btn-text-dark: var(--clr-neutral-800);

    background-color: transparent;
    color: hsl(var(--clr-btn-text-dark));

    border: 1px solid hsl(var(--clr-btn));
  }

  @media (hover: hover) {
    .btn.secondary:hover {
      background-color: hsl(var(--clr-btn));
    }
    .btn.btn.primary:hover {
      background-color: hsl(var(--clr-btn-hover));
    }
  }
</style>
