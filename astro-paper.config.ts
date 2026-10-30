import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: process.env.URL || "https://eerojalo.com/",
    title: "Eero Jalo",
    description:
      "Technology and program leader advancing applied AI, digital twins, data platforms, and smart infrastructure.",
    author: "Eero Jalo",
    profile: "https://www.linkedin.com/in/eero-jalo/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: false,
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/eero-jalo/" },
    {
      name: "mail",
      url: "https://tally.so/r/OQQp7K",
      linkTitle: "Open Eero Jalo's contact form",
    },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});