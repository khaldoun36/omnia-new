<template>
  <div class="scroller" :data-direction="dataDirection" :data-speed="dataSpeed">
    <div class="scroller__inner">
      <div
        class="testimonial-card v-stack v-stack-s"
        style="--v-gap: 16px"
        v-for="item in data"
        :key="item.title"
      >
        <div class="h-stack" style="--h-gap: 12px">
          <img
            src=""
            alt="trainees' profile photo"
            style="
              width: 44px;
              aspect-ratio: 1;
              border-radius: 100%;
              background-color: lightsalmon;
            "
          />
          <h4 class="text-base font-bold text-darker">{{ item.title }}</h4>
        </div>
        <p class="text-base text-dark">
          {{ item.desc.substring(0, 150) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    dataDirection: {
      type: String,
      default: "right",
    },
    dataSpeed: {
      type: String,
      default: "slow",
    },
  });

  onMounted(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  });
</script>

<style scoped>
  .scroller {
    padding-top: var(--space-15);
  }
  .scroller__inner {
    padding-block: var(--space-7);
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-9);
  }

  .scroller[data-animated="true"] {
    overflow: hidden;
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  .scroller[data-animated="true"] .scroller__inner {
    width: max-content;
    flex-wrap: nowrap;
    animation: scroll var(--_animation-duration, 40s)
      var(--_animation-direction, forwards) linear infinite;
  }

  .scroller[data-direction="right"] {
    --_animation-direction: reverse;
  }

  .scroller[data-direction="left"] {
    --_animation-direction: forwards;
  }

  .scroller[data-speed="fast"] {
    --_animation-duration: 20s;
  }

  .scroller[data-speed="slow"] {
    --_animation-duration: 60s;
  }

  .v-stack-s {
    justify-content: normal;
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }

  /* Image styling */

  .testimonial-card {
    max-width: 40ch;
    border: 1px solid hsl(var(--clr-neutral-200) / 0.8);
    border-radius: var(--border-radius-2);
    padding: var(--space-7);
  }

  @media screen and (min-width: 64rem) {
    .scroller {
      padding-top: var(--space-17);
    }
  }
</style>
