// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Herbarium Specimen Duplicate Finder',
      favicon: '/favicon.png',
      logo: {
        src: './src/assets/logo.png',
      },
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'English',
          lang: 'en',
        },
        fr: {
          label: 'Français',
          lang: 'fr',
        },
        pt: {
          label: 'Português',
          lang: 'pt',
        },
        mg: {
          label: 'Malagasy',
          lang: 'mg',
        },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Installation', link: '/installation' },
        {
          label: 'Docs', items: [
            { label: 'Sign up / Sign in', link: '/docs/signin' },
            { label: 'Application Settings', link: '/docs/settings' },
            { label: 'Switching Languages', link: '/docs/languages' },
            { label: 'Capture Sessions', link: '/docs/sessions' },
            { label: 'Searching Records', link: '/docs/searching' },
            { label: 'Selecting & Editing', link: '/docs/editing' },
            { label: 'Exporting Data', link: '/docs/exporting' },
          ]
        }
      ],
      plugins: [
        starlightThemeNova(/* options */),
      ],
    }),
  ],
});
