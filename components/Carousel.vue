<template>
  <div
    class="scroller full-width"
    :data-direction="dataDirection"
    :data-speed="dataSpeed"
  >
    <div class="scroller__inner">
      <img
        class="carousel-img"
        v-for="n in clientImages.length"
        :key="n"
        :src="clientImages[n - 1]"
        alt="client weight loss result image"
      />
    </div>
  </div>
</template>

<script setup>
  // import image
  import clientImage__1 from "../assets/images/client-images/client-photo-1.jpeg";
  import clientImage__2 from "../assets/images/client-images/client-photo-2.jpeg";
  import clientImage__3 from "../assets/images/client-images/client-photo-3.jpeg";
  import clientImage__4 from "../assets/images/client-images/client-photo-4.jpeg";
  import clientImage__5 from "../assets/images/client-images/client-photo-5.jpeg";
  import clientImage__6 from "../assets/images/client-images/client-photo-6.jpeg";
  import clientImage__7 from "../assets/images/client-images/client-photo-7.jpeg";
  import clientImage__8 from "../assets/images/client-images/client-photo-8.jpeg";

  const clientImages = [
    clientImage__1,
    clientImage__2,
    clientImage__3,
    clientImage__4,
    clientImage__5,
    clientImage__6,
    clientImage__7,
    clientImage__8,
  ];

  const props = defineProps({
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

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }

  /* Image styling */

  .carousel-img {
    width: 240px;
    aspect-ratio: 1;
    border-radius: var(--border-radius-1);
  }

  .carousel-img:nth-child(odd) {
    transform: rotate(-2deg);
  }
  .carousel-img:nth-child(even) {
    transform: rotate(2deg);
  }

  @media screen and (min-width: 64rem) {
    .scroller {
      padding-top: var(--space-17);
    }
    .carousel-img {
      width: 300px;
      aspect-ratio: 1;
      border-radius: var(--border-radius-1);
    }
  }
</style>
