// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Treelink Docs",
      social: {
        github: "https://github.com/trevortylerlee",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Quick Start", slug: "guides/quick-start" },
            { label: "Deploy Your Site", slug: "guides/deploy" },
            { label: "Adding Analytics", slug: "guides/analytics" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  site: "https://docs.treelink.app",
});
