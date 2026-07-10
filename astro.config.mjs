// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';
import release from './src/config/release.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://ianengelbrecht.github.io',
  base: '/wioi-duplicate-finder-docs',
  vite: {
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(release.version),
    },
  },
  integrations: [
    starlight({
      title: {
        en: 'Herbarium Specimen Duplicate Finder',
        fr: "Chercheur de doublons d'échantillons d'herbier",
        pt: 'Localizador de Duplicatas de Amostras de Herbário',
        mg: "Mpikaroka Duplicate amin'ny Santionany Herbarium",
      },
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
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ianengelbrecht/wioi-duplicate-finder-docs',
        },
      ],
      sidebar: [
        {
          label: 'Home',
          translations: { en: 'Home', fr: 'Accueil', pt: 'Início', mg: 'Fandraisana' },
          link: '/',
        },
        {
          label: 'About',
          translations: { en: 'About', fr: 'À propos', pt: 'Sobre', mg: 'Momba' },
          link: '/about',
        },
        {
          label: 'Installation',
          translations: {
            en: 'Installation',
            fr: 'Installation',
            pt: 'Instalação',
            mg: 'Fametrahana',
          },
          link: '/installation',
        },
        {
          label: 'Data preparation',
          translations: {
            en: 'Data preparation',
            fr: 'Préparation des données',
            pt: 'Preparação de Dados',
            mg: 'Fikarakarana Data',
          },
          link: '/data-prep',
        },
        {
          label: 'Usage',
          translations: { en: 'Usage', fr: 'Utilisation', pt: 'Uso', mg: 'Fampiasana' },
          items: [
            {
              label: 'Sign up / Sign in',
              translations: {
                en: 'Sign up / Sign in',
                fr: "S'inscrire / Se connecter",
                pt: 'Registrar / Entrar',
                mg: 'Hisoratra anarana / Hidirana',
              },
              link: '/docs/signin',
            },
            {
              label: 'Application Settings',
              translations: {
                en: 'Application Settings',
                fr: "Paramètres de l'application",
                pt: 'Configurações do Aplicativo',
                mg: 'Fikirakirana ny Fampiharana',
              },
              link: '/docs/settings',
            },
            {
              label: 'Switching Languages',
              translations: {
                en: 'Switching Languages',
                fr: 'Changer de langue',
                pt: 'Alterar Idiomas',
                mg: 'Mifamadika Fiteny',
              },
              link: '/docs/languages',
            },
            {
              label: 'Capture Sessions',
              translations: {
                en: 'Capture Sessions',
                fr: 'Sessions de capture',
                pt: 'Sessões de Captura',
                mg: 'Fivoriana Fandraisana',
              },
              link: '/docs/sessions',
            },
            {
              label: 'Searching Records',
              translations: {
                en: 'Searching Records',
                fr: 'Recherche de dossiers',
                pt: 'Pesquisando Registros',
                mg: 'Mitady Rakitra',
              },
              link: '/docs/searching',
            },
            {
              label: 'Selecting & Editing',
              translations: {
                en: 'Selecting & Editing',
                fr: 'Sélection et édition',
                pt: 'Selecionando e Editando',
                mg: 'Misafidy & Manova',
              },
              link: '/docs/editing',
            },
            {
              label: 'Exporting Data',
              translations: {
                en: 'Exporting Data',
                fr: 'Exportation de données',
                pt: 'Exportando Dados',
                mg: 'Manondrana Data',
              },
              link: '/docs/exporting',
            },
          ],
        },
        {
          label: 'Releases',
          translations: { en: 'Releases', fr: 'Versions', pt: 'Lançamentos', mg: 'Famoahana' },
          items: [{ autogenerate: { directory: 'releases' } }],
        },
      ],
      components: {
        Sidebar: './src/components/SidebarWithVersion.astro',
      },
      plugins: [starlightThemeNova(/* options */)],
    }),
  ],
});
