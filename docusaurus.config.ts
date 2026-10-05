import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'TreeFlow',
  tagline: 'Conversaciones que Generan Negocio',
  favicon: 'img/favicon.ico',

  // Variables personalizadas que se pueden usar en toda la documentación
  customFields: {
    treeflowUrl: 'tf.botsmexico.com',
  },

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://treeeflow.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mizar', // Usually your GitHub org/user name.
  projectName: 'treeflow-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/docs/Fundamentos/Ramas', to: '/docs/Fundamentos/Intenciones'},
          {from: '/docs/Fundamentos/Hojas', to: '/docs/Fundamentos/Entidades'},
          {from: '/docs/Fundamentos/EditorVisual', to: '/docs/Fundamentos/Flujos'},
          {from: '/docs/Fundamentos/Testeo', to: '/docs/Fundamentos/ProbarElBot'},
          {from: '/docs/Avanzado/Consola', to: '/docs/Fundamentos/ProbarElBot'},
          {from: '/docs/Avanzado/Contextos', to: '/docs/Fundamentos/Flujos'},
          {from: '/docs/Avanzado/Eventos', to: '/docs/Fundamentos/Flujos'},
          {from: '/docs/Avanzado/Analitica', to: '/docs/Fundamentos/Empezando'},
          {from: '/docs/Avanzado/LenguajeDePlantillas', to: '/docs/Avanzado/Funciones'},
          {from: '/docs/Avanzado/NLP', to: '/docs/Avanzado/Entendimiento'},
          {from: '/docs/Avanzado/Testeo', to: '/docs/Avanzado/Pruebas'},
          {from: '/docs/Misc/HojasDelSistema', to: '/docs/Fundamentos/Entidades'},
          {from: '/docs/Misc/EntidadesDeSistema', to: '/docs/Fundamentos/Entidades'},
          {from: '/docs/Misc/Funciones', to: '/docs/intro'},
          {from: '/docs/Misc/LocalTunnel', to: '/docs/intro'},
          {from: '/docs/Misc/Despliegues', to: '/docs/intro'},
          {from: '/docs/Misc/ImportarExportar', to: '/docs/Avanzado/ImportarExportar'},
          {from: '/docs/Fertilizantes', to: '/docs/Herramientas'},
          {from: '/docs/Fertilizantes/Scripts', to: '/docs/Herramientas/Scripts'},
          {from: '/docs/Fertilizantes/Apis', to: '/docs/Herramientas/Apis'},
          {from: '/docs/Fertilizantes/Webhook', to: '/docs/Herramientas/Webhook'},
          {from: '/docs/Fertilizantes/Transferencias', to: '/docs/Herramientas/Transferencias'},
          {from: '/docs/Fertilizantes/BaseDeConocimiento', to: '/docs/Herramientas/BaseDeConocimiento'},
          {from: '/docs/Fertilizantes/IngestionGenerativa', to: '/docs/Herramientas/IngestionGenerativa'},
          {from: '/docs/Injertos/CanalesDeComunicacion', to: '/docs/Canales/CanalesDeComunicacion'},
          {from: '/docs/Injertos/SMS', to: '/docs/Canales/CanalesDeComunicacion'},
          {from: '/docs/Injertos/Telefonia', to: '/docs/Canales/CanalesDeComunicacion'},
          {from: '/docs/Injertos/WhatsApp/Introduccion', to: '/docs/Canales/WhatsApp/setup'},
          {from: '/docs/Injertos/WhatsApp/setup', to: '/docs/Canales/WhatsApp/setup'},
          {from: '/docs/Injertos/Telegram', to: '/docs/Canales/Telegram'},
          {from: '/docs/Injertos/Slack/setup', to: '/docs/Canales/Slack/setup'},
          {from: '/docs/Injertos/Discord/setup', to: '/docs/Canales/Discord/setup'},
          {from: '/docs/Injertos/Email', to: '/docs/Canales/Email'},
          {from: '/docs/Injertos/Facebook', to: '/docs/Canales/Facebook'},
          {from: '/docs/Injertos/Instagram/setup', to: '/docs/Canales/Instagram/setup'},
          {from: '/docs/Injertos/ElevenLabs/setup', to: '/docs/Canales/ElevenLabs/setup'},
          {from: '/docs/Injertos/Avatares/setup', to: '/docs/Canales/Avatares/setup'},
          {from: '/docs/Injertos/Web/setup', to: '/docs/Canales/Web/setup'},
          {from: '/docs/Injertos/Web/personalizacion', to: '/docs/Canales/Web/personalizacion'},
          {from: '/docs/Injertos/Web/eventos', to: '/docs/Canales/Web/Funcionalidad'},
          {from: '/docs/Injertos/Web/widget-qwidget', to: '/docs/Canales/Web/DesdeLaPagina'},
          {from: '/docs/Reforestacion', to: '/docs/Agente/Constructor'},
          {from: '/docs/Reforestacion/Reforestacion', to: '/docs/Agente/Constructor'},
          {from: '/docs/Reforestacion/GuiaInicioReforestacion', to: '/docs/Agente/PrimerEncargo'},
          {from: '/docs/Reforestacion/Introduccion', to: '/docs/Agente/Introduccion'},
          {from: '/docs/Reforestacion/GenAITools', to: '/docs/Agente/GenAITools'},
          {from: '/docs/Reforestacion/ModelosGenerativos', to: '/docs/Agente/ModelosGenerativos'},
          {from: '/docs/Reforestacion/ArquitecturaGenerativa', to: '/docs/Agente/ArquitecturaGenerativa'},
          {from: '/docs/Reforestacion/Pipeline6Fases', to: '/docs/Agente/Introduccion'},
          {from: '/docs/Reforestacion/IntegracionGenerativa', to: '/docs/Agente/Introduccion'},
          {from: '/docs/Reforestacion/NLP', to: '/docs/Avanzado/Entendimiento'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Mizar-Contasti/treeflow-doc',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'TreeFlow',
      logo: {
        alt: 'TreeFlow',
        src: 'img/logo-small.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Fundamentos',
              to: '/docs/category/fundamentos',
            },
            {
              label: 'Historial de Cambios',
              to: '/docs/changelog',
            },
          ],
        },
        {
          title: 'Comunidad y Soporte',
          items: [
            {
              label: 'Email',
              href: 'mailto:contasti.mizar@gmail.com',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@botsmexico',
            },
            // {
            //   label: 'X',
            //   href: 'https://x.com/docusaurus',
            // },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Curso de Treeflow',
              href: 'https://www.youtube.com/@botsmexico',
            },
            {
              label: 'Repo Docker',
              href: 'https://hub.docker.com/u/m1zar',
            },
            {
              label: 'Repo Github',
              href: 'https://github.com/Mizar-Contasti/treeflow',
            },
          ],
        },
      ],  
      copyright: `Copyright © ${new Date().getFullYear()} BotsMexico. Hecho con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
