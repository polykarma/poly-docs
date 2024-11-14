import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config = {
  title: 'PolyDocs',
  tagline: 'Documentation des cours de PolyMtl',
  favicon: 'img/polymtl.ico',
  url: 'https://polykarma.github.io',
  baseUrl: '/poly-docs/',
  organizationName: 'polykarma',
  projectName: 'poly-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/polykarma/poly-docs/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'PolyDocs',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/polykarma/poly-docs',
          label: 'Contribute on GitHub',
          position: 'left',
        },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
