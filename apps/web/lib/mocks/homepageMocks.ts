import { Page } from "@/lib/contentful/types";

export const homePageMock: Page = {
  title: "Mock Homepage",
  slug: "/",
  sections: {
    hero: {
      type: "heroComponent",
      id: "homepage-hero",
      heading: "Try something new every month.",
      subheading:
        "— Each month, we meet up to learn something unexpected, useful, interesting, or just plain fun. No experience needed, just curiosity.",
      buttons: [
        {
          id: "about-us-button",
          text: "About Us",
          url: "about-us",
          variant: "outline",
        },
        {
          id: "upcoming-events-button",
          text: "Upcoming Events",
          url: "events",
          variant: "default",
          icon: {
            title: "Calendar Icon",
            description: "Calendar icon",
            url: "/mocks/calendar.svg",
          },
        },
      ],
      image: {
        title: "Glasgow Line Art",
        description:
          "A line art drawing of the Glasgow City skyline depicting various landmarks from the city.",
        url: "/mocks/glasgow.png",
      },
    },
    aboutUs: {
      type: "textComponent",
      id: "homepage-about-us",
      sectionName: "About Us",
      heading: "Our mission is to bring people together",
      subheading: "What is Try Something New Club exactly?",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  "**Curious minds thrive together.** Try Something New Club is a Glasgow-based monthly meetup for anyone who loves learning new skills—whether you're picking up something brand new or deepening something familiar. Each session is a chance to explore, experiment, and grow in good company. No pressure to perform, no need to be an expert—just a shared space to try things out, meet like-minded people, and enjoy the process.",
                marks: [],
              },
            ],
          },
        ],
      },
    },
    whyJoinUs: {
      type: "textComponent",
      id: "homepage-why-join-us",
      sectionName: "Why Join Us",
      heading: "Why join us?",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  "**This isn't just about networking** — it's about doing. Instead of awkward small talk, you'll spend the session actually learning, practising, or improving a skill, alongside people who are just as curious and motivated as you. Whether you're trying something completely new or getting better at something you've started, it's a space to focus, explore, and keep your curiosity alive.",
                marks: [],
              },
            ],
          },
        ],
      },
      additionalComponents: [
        {
          id: "about-us-button",
          text: "About Us",
          url: "about-us",
          variant: "outline",
        },
        {
          id: "upcoming-events-button",
          text: "Upcoming Events",
          url: "events",
          variant: "default",
          icon: {
            title: "Calendar Icon",
            description: "Calendar icon",
            url: "/mocks/calendar.svg",
          },
        },
      ],
    },
    newsletter: {
      type: "textComponent",
      id: "homepage-newsletter-cta",
      sectionName: "Newsletter CTA",
      heading: "Want to stay notified?",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value:
                  "No spam. Just the latest events as they become available, as well as any other information we need to share with you.",
                marks: [],
              },
            ],
          },
        ],
      },
    },
  },
};
