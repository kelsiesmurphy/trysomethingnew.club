import { Page } from "@/lib/contentful/simplified-types";

export const homePageMock: Page = {
  title: "Mock Homepage",
  slug: "/",
  pageContent: [
    {
      type: "heroComponent",
      id: "homepage-hero",
      heading: "Mock Hero Heading",
      subheading: "Mock Hero Subheading",
      buttons: [
        {
          id: "mock-button-id",
          text: "Secondary Button",
          url: "/mock",
          variant: "outline",
        },
        {
          id: "mock-button-id-2",
          text: "Primary Button",
          url: "/mock2",
          variant: "default",
          icon: {
            title: "Mock Icon",
            description: "Mock icon description",
            url: "//picsum.photos/16/16",
          },
        },
      ],
      image: {
        title: "Mock Image Title",
        description: "Mock image description",
        url: "//picsum.photos/1216/255",
      },
    },
    {
      type: "textComponent",
      id: "homepage-about-us",
      sectionName: "About Us",
      heading: "Mock Section Heading",
      subheading: "Mock Section Subheading",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "This is mock body text for the About Us section.",
                marks: [],
              },
            ],
          },
        ],
      },
    },
    {
      type: "textComponent",
      id: "homepage-why-join-us",
      sectionName: "Why Join Us",
      heading: "Another Mock Heading",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "Additional mock body content goes here.",
                marks: [],
              },
            ],
          },
        ],
      },
      additionalComponents: [
        {
          id: "mock-button-id",
          text: "Another Button",
          url: "/another",
          variant: "link",
        },
      ],
    },
    {
      type: "textComponent",
      id: "homepage-newsletter-cta",
      sectionName: "Newsletter CTA",
      heading: "Mock Newsletter Heading",
      body: {
        nodeType: "document",
        content: [
          {
            nodeType: "paragraph",
            content: [
              {
                nodeType: "text",
                value: "Mock text for newsletter call-to-action.",
                marks: [],
              },
            ],
          },
        ],
      },
    },
  ],
};
