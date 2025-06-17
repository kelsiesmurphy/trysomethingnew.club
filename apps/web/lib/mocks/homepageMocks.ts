export const homePageMock = {
  title: "Mock Homepage",
  slug: "/",
  pageContent: [
    {
      fields: {
        id: "homepage-hero",
        heading: "Mock Hero Heading",
        subheading: "Mock Hero Subheading",
        buttons: [{ id: "mock-button-id" }],
        image: {
          fields: {
            title: "Mock Image Title",
            description: "Mock image description",
            file: {
              url: "//picsum.photos/1216/255",
            },
          },
        },
      },
    },
    {
      fields: {
        id: "homepage-about-us",
        sectionName: "Mock Section 1",
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
                  value: "This is mock body text for section 1.",
                  marks: [],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: "textComponent",
      fields: {
        id: "homepage-why-join-us",
        sectionName: "Mock Section 2",
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
        additionalComponents: [{ id: "mock-button-id" }],
      },
    },
    {
      type: "textComponent",
      fields: {
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
    },
  ],
};
