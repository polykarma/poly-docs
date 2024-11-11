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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
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


};

export default config;
