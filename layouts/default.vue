<template>
  <div class="content-grid">
    <PrimaryHeader />

    <slot />

    <Footer />
  </div>
</template>

<style>
  .content-grid {
    --inline-padding: var(--space-7);

    background: linear-gradient(
      to right,
      hsl(var(--clr-neutral-100)) 0px calc(50% - 608px),
      hsl(var(--clr-neutral-50)) calc(50% - 608px) calc(50% + 608px),
      hsl(var(--clr-neutral-100)) calc(50% + 608px) 100%
    );

    display: grid;
    grid-template-columns:
      [full-width-start] var(--inline-padding)
      [content-start] 1fr [content-end]
      var(--inline-padding) [full-width-end];
  }

  .content-grid > :not(.full-width, .breakout) {
    grid-column: content;
  }

  .content-grid > .full-width {
    grid-column: full-width;
  }

  @media screen and (min-width: 64rem) {
    .content-grid {
      --inline-padding: var(--space-15);
      --outline-padding: var(--space-19);

      grid-template-columns:
        [full-width-start] 1fr
        [breakout-start] var(--inline-padding)
        [content-start] repeat(12, minmax(0, 4rem)) [content-end]
        var(--inline-padding) [breakout-end] 1fr [full-width-end];

      gap: 2rem;
    }
  }
</style>
