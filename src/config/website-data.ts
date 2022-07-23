const baseUrl = "http://localhost:3000";

export const websiteData = {
  homeTitle: "JOEY GILBERT",
  titleLabel: "Website",
  baseUrl,
  locale: "en_US",
  ogTitle: "Website",
  ogDescription:
    "Aliqua ad non sit aute occaecat eu. Do exercitation cupidatat tempor eiusmod sit eiusmod aliquip magna incididunt dolor sit ullamco esse quis. Lorem incididunt velit aliquip commodo anim qui qui eiusmod pariatur in irure nisi exercitation.",
  ogDefaultImages: [
    {
      url: baseUrl + "/default-og.webp",
      width: 1920,
      height: 1080,
      alt: "Sunt sint occaecat in laboris consectetur ea id aliquip enim ea cupidatat laboris exercitation occaecat.",
    },
  ],
  twitter: {
    summary:
      "Commodo sunt officia esse sit non mollit laborum commodo aute amet ex magna qui Lorem. Est adipisicing ex mollit labore pariatur excepteur consectetur sint. Ullamco sint irure esse aliquip esse consectetur id sit adipisicing deserunt.",
    site: "Website",
    handle: "@website",
  },
  favicons: [
    {
      rel: "icon",
      href: "/favicon.png",
      sizes: "64x64",
    },
  ],
};
