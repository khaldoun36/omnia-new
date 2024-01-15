// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Omnia Coaching",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Elevate your fitness journey with Omnia Coaching—a personalized approach to health and wellness. Achieve your goals, transform your lifestyle, and embrace a stronger, healthier you with expert guidance from our dedicated personal trainers. Unleash your potential with tailored workouts, nutrition plans, and unwavering support. Your fitness evolution starts here at Omnia Coaching.",
        },
      ],
    },
  },

  // Global CSS import
  css: ["~/assets/css/design-tokens.css"],

  // Nuxt specific modules
  modules: ["@nuxt/image"],
});
