import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import "dotenv/config";

const config: Config = {
  title: "Startups acquisition guides",
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
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/opengraph-image.jpg",
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
