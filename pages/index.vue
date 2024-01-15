<template>
  <main class="hero-section full-width content-grid">
    <div class="v-stack">
      <h1 class="text-5xl font-bold text-darker">
        I helped Khaldoon <br />
        <span class="text-primary">lose 12kg in 4 weeks.</span>
      </h1>
      <p class="text-base text-dark">
        Transform into the best version of yourself with my personalized fitness
        guidance and unwavering support. Together, we'll achieve the results you
        desire.
      </p>
      <ButtonBase variant="primary">schedule a call</ButtonBase>
    </div>
    <Vue3Marquee :duration="30" class="marquee full-width">
      <NuxtImg
        class="carousel-img"
        width="1080"
        height="1080"
        v-for="n in 8"
        :key="n"
        :src="`client-images/client-photo-${n}.jpeg`"
        alt="client weight loss result image"
      />
    </Vue3Marquee>
  </main>

  <section class="about-me card h-stack">
    <div class="about-me-content v-stack">
      <h2 class="text-5xl font-bold text-darker">
        I help people like you become the
        <span class="text-primary">Ultimate You.</span>
      </h2>
      <p class="text-base text-dark">
        Over the years, I have helped people get in the best shape of their
        lives. I get it, it can be frustrating when you are putting the effort
        in and not seeing the results show. Thats what I do, I make sure that
        you are putting the effort in and seeing the results that you deserve. I
        do this by not only giving you the tools but also making sure you are
        using them and following the plan we have specifically built for you. My
        fundamental goal is for you to become the ultimate version of yourself.
      </p>
    </div>
    <img
      :src="aboutMeImg"
      class="about-me-img"
      alt="Personal Trainer's image"
    />
  </section>
  <section>
    <div class="packages h-stack">
      <div class="card v-stack">
        <div class="card-header v-stack" style="--v-gap: var(--space-7)">
          <h3 class="text-xs font-bold text-darker">Online Coaching</h3>
          <p class="text-2xs text-dark">
            Transform your physique and lifestyle from anywhere with our online
            coaching program.
          </p>
        </div>
        <ButtonBase variant="primary" class="packages-cta"
          >schedule a call</ButtonBase
        >
        <ul class="card-content v-stack">
          <li
            class="content-item text"
            v-for="item in packages.onlineTraining"
            :key="item"
          >
            <img
              :src="circleCheck"
              class="icon"
              alt="check icon"
              areia-hidden="true"
            />
            <p class="text-xs text-dark">{{ item }}</p>
          </li>
        </ul>
      </div>
      <div class="card v-stack">
        <div class="card-header v-stack" style="--v-gap: var(--space-7)">
          <h3 class="text-xs font-bold text-darker">In-person Coaching</h3>
          <p class="text-2xs text-dark">
            Maximize your gym sessions with in-person coaching: boost
            confidence, ensure proper training, and enjoy a seamless workout.
          </p>
        </div>
        <ButtonBase variant="primary" class="packages-cta"
          >schedule a call</ButtonBase
        >
        <ul class="card-content v-stack">
          <li
            class="content-item"
            v-for="item in packages.personalTraining"
            :key="item"
          >
            <img
              :src="circleCheck"
              class="icon"
              alt="check icon"
              areia-hidden="true"
            />
            <p class="text-xs text-dark">{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="testimonials full-width content-grid">
    <h2 class="text-4xl font-bold text-darker">
      See what the people are saying
    </h2>
    <!-- <TestimonialCarousel :data="testimonilas" /> -->
    <Vue3Marquee :duration="30" class="marquee">
      <div
        class="testimonial-card v-stack v-stack-s"
        style="--v-gap: 16px"
        v-for="item in testimonilas"
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
    </Vue3Marquee>
    <Vue3Marquee :duration="30" direction="reverse" class="marquee">
      <div
        class="testimonial-card v-stack v-stack-s"
        style="--v-gap: 16px"
        v-for="item in testimonilas"
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
    </Vue3Marquee>
  </section>
  <section class="call-to-action">
    <div class="v-stack cta">
      <h2 class="text-4xl font-bold text-darker">
        Do you have a question I didn't answer?
      </h2>
      <p class="text-base text-dark">
        Reach out, and I'll promptly address your inquiries.
      </p>
      <ButtonBase variant="primary" class="cta-btn">schedule a call</ButtonBase>
    </div>
  </section>
</template>

<script setup>
  import aboutMeImg from "../assets/images/about-me.jpeg";
  import circleCheck from "../assets/icons/circle-check-regular.svg";

  import packages from "../assets/packages.js";
  import testimonilas from "~/assets/Testimonilas";

  let isVissible = ref(false);

  onMounted(() => {
    let screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      isVissible.value = true;
    } else {
      isVissible.value = false;
    }
  });
</script>

<style scoped>
  .hero-section {
    padding-top: var(--space-25);
  }
  .hero-section > .v-stack * {
    max-width: 65ch;
  }

  .about-me {
    margin-top: var(--space-17);
    border: 1px solid hsl(var(--clr-neutral-200) / 0.8);
  }

  .about-me > .about-me-content > p {
    max-width: 56ch;
  }

  .about-me > .about-me-img {
    display: none;
    overflow: clip;
    max-width: 50%;
    border-radius: var(--border-radius-1);
    box-shadow: 0px 4px 20px 0px rgba(39, 39, 42, 0.4);
  }

  .packages {
    margin-top: var(--space-17);
    flex-direction: column;
  }

  .packages > .card {
    margin-top: auto;
    position: relative;
    border: 1px solid hsl(var(--clr-neutral-200) / 0.8);
    overflow: hidden;
    flex: 1;
    z-index: 10;
  }

  .packages > .card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    aspect-ratio: 1;
    background-color: hsl(var(--clr-primary-500));
    filter: blur(200px);
    z-index: -2;
  }

  .card-content {
    padding-left: 0;
  }

  .card-content > .content-item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-5);
  }

  .packages-cta {
    width: 100%;
  }

  .icon {
    width: var(--space-8);
    height: var(--space-8);
    margin-top: 3px;
  }

  .testimonials {
    margin-top: var(--space-17);
  }

  .testimonials > h2 {
    text-align: center;
  }

  .cta {
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: var(--space-17);
  }
  .marquee {
    padding-block: var(--space-7);
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 40%,
      white 60%,
      white 90%,
      transparent
    );
    overflow-y: clip;
  }

  .marquee > * {
    margin-right: var(--space-11);
  }

  /* client images start */
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
  /* client images end */

  /* client testimonials start */
  .v-stack-s {
    justify-content: normal;
  }

  .testimonial-card {
    max-width: 40ch;
    border: 1px solid hsl(var(--clr-neutral-200) / 0.8);
    border-radius: var(--border-radius-2);
    padding: var(--space-7);
  }
  /* client testimonials end */

  @media screen and (min-width: 64rem) {
    .hero-section {
      padding-top: var(--space-21);
    }
    .about-me > .about-me-img {
      display: block;
    }

    .packages {
      flex-direction: row;
    }

    /* client images start */
    .carousel-img {
      width: 300px;
      aspect-ratio: 1;
      border-radius: var(--border-radius-1);
    }
    /* client images end */
  }
</style>
