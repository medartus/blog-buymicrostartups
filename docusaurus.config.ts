import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

const description =
  "Learn how to create, buy and sell micro startups. Startups creation, acquisition and sales guides for entrepreneurs and investors.";
const title = "Startups creation and acquisition guides";
const seoTile = `${title} | BuyMicroStartups`;

const config: Config = {
  title: "BuyMicroStartups",
  tagline: "Learn how to buy and sell micro startups.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://blog.buymicrostartups.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/medartus/blog-buymicrostartups/tree/mainline/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/medartus/blog-buymicrostartups/tree/mainline/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/opengraph-image.png",
    metadata: [
      { name: "description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@buy_micro" },
      { name: "twitter:title", content: seoTile },
      {
        name: "twitter:description",
        content: description,
      },
      { property: "og:title", content: seoTile },
      { property: "og:type", content: "website" },
      { property: "og:url", content: process.env.SITE_URL },
      {
        property: "og:description",
        content: description,
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
    ],
    navbar: {
      title: "BuyMicroStartups",
      logo: {
        alt: "BuyMicroStartups Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Guides",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://www.buymicrostartups.com",
          label: "Marketplace",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Guides",
          items: [
            {
              label: "How to buy or sell a micro startup",
              to: "/docs/expert-tips-for-successful-micro-startup-transactions",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "BuyMicroStartups Twitter",
              href: "https://twitter.com/buy_micro",
            },
            {
              label: "Marc-Etienne Twitter",
              href: "https://twitter.com/medartus",
            },
            {
              label: "Domenico Twitter",
              href: "https://twitter.com/DG_9_6",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "/blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BuyMicroStartups.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: process.env.POSTHOG_KEY, // required
        api_host: `${process.env.SITE_URL}/ingest`,
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
      },
    ],
  ],
};

export default config;
