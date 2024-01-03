<template>
  <div class="about-me-container">
    <main class="about-me">
      <h1 class="text-5xl text-darker font-bold">
        I'm Sam Foulkes - Online & PT Transformation Coach
      </h1>
      <div class="v-stack">
        <p class="text-base text-dark">
          My journey began when I was 16 after a serious accident. A tow hitch
          tractor crushed my entire left foot, so I could no longer play rugby,
          which was my absolute passion. I loved playing that game and now I
          couldn't do it anymore. I had to turn my attention and find another
          passion. My rugby career required intensive training. As soon as I
          could walk again, which was after six months maybe 8, I got back into
          the gym and started to shift away from the weight I put on during
          recovery, which was a lot. I lost all the weight I had put on during
          recovery and found my absolute love for training again.
        </p>
        <p class="text-base text-dark">
          I have always loved the training. It has always been a release of
          mine, somewhere I can go and just forget about everything. Around the
          same time, I started helping friends on their weight loss journeys.
          They saw my body change and wanted some advice on how I did it. I
          started giving them advice and then they started doing really well.
          Watching them change and regain control of their weight made me feel a
          certain way. That fire of seeing someone change right before my eyes
          gave me so much joy. It made me passionate about something again. I
          had found my absolute calling.
        </p>
        <p class="text-base text-dark">
          I became a coach and have never looked back. This career has given me
          so much. It has taken me from my local area to Dubai and has given me
          more opportunities than I could ever imagine. Seeing people transform
          their lives, not just their bodies, gives me such a joyous feeling I
          can't describe. There is no feeling in my mind that compares to that.
          Seeing someone going from barely being able to look at themselves in
          the mirror to wearing a bikini on the beach is an indescribable
          feeling.
        </p>
        <p class="text-base text-dark">
          I love what I do, and I aim to help as many people as I can as best as
          I can. That's my life's purpose. I have probably been in a similar
          situation as you, I have done things I didn't fully understand. But I
          have done the research and have helped many people in a similar
          situation as you are. I am always here to help in whatever area it may
          be just a question, a full-blown plan, or a one-to-one session. My aim
          as a coach is to help and get you where you want to be. That's my love
          and passion.
        </p>
      </div>
    </main>
    <aside class="about-me-links">
      <img :src="aboutMe" alt="Trainer's image" />

      <div class="h-stack" style="--h-gap: var(--space-5)">
        <img :src="emailIcon" alt="Email icon" class="icon" />
        <NuxtLink
          to="mailto:omnia.samfoulkes@gmail.com"
          target="_blank"
          rel="noopener"
          class="text-xs text-dark"
          >omnia.samfoulkes@gmail.com</NuxtLink
        >
        <div class="spacer"></div>
      </div>

      <div class="h-stack" style="--h-gap: var(--space-5)">
        <img :src="instagramLogo" alt="Instagram Logo" class="icon" />
        <p class="text-xs text-dark">Follow on Instagram</p>
        <div class="spacer"></div>
      </div>
    </aside>
  </div>
</template>

<script setup>
  import aboutMe from "../assets/images/about-me-page.jpg";
  import instagramLogo from "../assets/icons/instagram.svg";
  import emailIcon from "../assets/icons/envelope-regular.svg";
</script>

<style scoped>
  .about-me-container {
    margin-top: var(--space-21);
  }
  .about-me > .v-stack {
    margin-top: var(--space-9);
  }

  .about-me-links {
    display: none;
  }

  .about-me-links > img {
    border-radius: var(--border-radius-1);
    aspect-ratio: 1;
    transform: rotate(2deg);
    margin-bottom: var(--space-15);
  }

  @media screen and (min-width: 64rem) {
    .about-me-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-11);
    }

    .about-me {
      flex: 1.5;
    }

    .about-me p {
      max-width: 65ch;
    }
    .about-me-links {
      display: block;
      flex: 1;
    }

    .about-me-links > .h-stack:last-child {
      margin-top: var(--space-7);
    }

    .about-me-links .spacer {
      margin-left: auto;
    }

    .about-me-links .icon {
      width: 20px;
      aspect-ratio: 1;
    }
  }
</style>
