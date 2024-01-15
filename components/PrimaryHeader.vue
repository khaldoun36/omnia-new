<template>
  <header class="full-width content-grid fixed-header">
    <div class="navigation-container">
      <img :src="Logo" alt="Logo" class="logo" />

      <nav class="navbar" :class="{ active: isExpanded }">
        <NuxtLink
          v-for="link in links"
          :key="link.text"
          :to="link.path"
          class="nav-link btn text-sm font-semibold text-darker"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
      <ButtonBase variant="secondary">Hello world</ButtonBase>

      <ButtonHamburger
        @toggleDrawer="toggleDrawer"
        :isExpanded="isExpanded"
        class="btn-hamburger"
        ref="target"
      />
    </div>
  </header>
</template>

<script setup>
  // Import sight logo
  import Logo from "../assets/images/logo.svg";

  const isExpanded = ref(false);

  const toggleDrawer = () => {
    isExpanded.value = !isExpanded.value;
  };

  const links = [
    { text: "Home", path: "/" },
    { text: "About me", path: "/about" },
    { text: "Insights", path: "/insights" },
    { text: "Free resources", path: "/resources" },
  ];
</script>

<style scoped>
  .fixed-header {
    --header-padding: var(--space-7);
    --blur-size: var(--space-2);
    --clr-border: var(--clr-neutral-200);

    background-color: transparent;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;

    padding-block: var(--header-padding);

    border-bottom: 1px solid hsl(var(--clr-border) / 0.8);
  }

  .fixed-header::after,
  .navbar::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: -1;
    background: hsl(var(--clr-neutral-50) / 0.8);
    backdrop-filter: blur(var(--blur-size));
  }

  .navigation-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    height: var(--space-13);
  }

  .navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: fixed;
    inset: 0;

    overflow: hidden;

    background-color: transparent;

    padding-block-start: var(--space-18);
    padding-inline-start: var(--space-7);

    transform: translateY(-100%);
    transition: transform 350ms ease-in-out;
  }

  .active {
    transform: translateY(0%);
  }

  .nav-link {
    padding-block: var(--space-9);
    position: relative;
  }

  .btn-nav {
    display: none;
    transform-origin: left;
  }

  @media screen and (min-width: 64rem) {
    .btn-hamburger {
      display: none;
    }

    .fixed-header {
      position: static;
    }
    .fixed-header::after {
      background: transparent;
      backdrop-filter: blur(0);
      position: static;
    }

    .navbar {
      --nav-padding: var(--space-3);
      --flex-gap: var(--space-1);

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--flex-gap);

      position: fixed;
      top: 8px;
      left: 50%;
      right: auto;
      bottom: auto;
      transform: translate(-50%, 0%);

      z-index: 1;

      border: 1px solid hsl(var(--clr-border) / 0.8);
      border-radius: var(--border-radius-2);

      padding: var(--nav-padding);
    }

    .nav-link {
      --nav-link-heigh: var(--space-13);
      --nav-link-padding: var(--space-8);

      padding-block: 0;
    }

    .router-link-active {
      background-color: hsl(var(--clr-neutral-200));
    }

    @media screen and (hover: hover) {
      .nav-link:hover {
        background-color: hsl(var(--clr-neutral-100));
      }
    }
  }
</style>
