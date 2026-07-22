import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '☕ Advanced Java',
  base: '/ajp/',
  description: 'Advanced Java Programming — Theory & Lab Notes',
  lang: 'en-IN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#272822' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap',
    }],
  ],

  markdown: {
    theme: { light: 'monokai', dark: 'monokai' },
    lineNumbers: true,
  },

  lastUpdated: true,

  themeConfig: {
    logo: { src: '/logo.svg', alt: 'AJP Notes' },
    siteTitle: 'AJP Notes',

    search: {
      provider: 'local',
      options: { placeholder: 'Search notes…' },
    },

    nav: [
      { text: '🏠 Home', link: '/' },
      {
        text: '☕ Theory',
        items: [
          {
            text: 'Unit 01 — Swings',
            items: [
              { text: 'Part 1', link: '/theory/unit-1/p1' },
              { text: 'Part 2', link: '/theory/unit-1/p2' },
              { text: 'Part 3', link: '/theory/unit-1/p3' },
              { text: 'Part 4', link: '/theory/unit-1/p4' },
              { text: 'Part 5', link: '/theory/unit-1/p5' },
              { text: 'Part 6', link: '/theory/unit-1/p6' },
            ],
          },
          {
            text: 'Unit 02 — Event Handling',
            items: [
              { text: 'Part 1', link: '/theory/unit-2/p1' },
              { text: 'Part 2', link: '/theory/unit-2/p2' },
              { text: 'Part 3', link: '/theory/unit-2/p3' },
              { text: 'Part 4', link: '/theory/unit-2/p4' },
              { text: 'Part 5', link: '/theory/unit-2/p5' },
              { text: 'Part 6', link: '/theory/unit-2/p6' },
            ],
          },
          {
            text: 'Unit 03 — JDBC Programming',
            items: [
              { text: 'Part 1', link: '/theory/unit-3/p1' },
              { text: 'Part 2', link: '/theory/unit-3/p2' },
              { text: 'Part 3', link: '/theory/unit-3/p3' },
              { text: 'Part 4', link: '/theory/unit-3/p4' },
              { text: 'Part 5', link: '/theory/unit-3/p5' },
              { text: 'Part 6', link: '/theory/unit-3/p6' },
            ],
          },
          {
            text: 'Unit 04 — Servlet API',
            items: [
              { text: 'Part 1', link: '/theory/unit-4/p1' },
              { text: 'Part 2', link: '/theory/unit-4/p2' },
              { text: 'Part 3', link: '/theory/unit-4/p3' },
              { text: 'Part 4', link: '/theory/unit-4/p4' },
              { text: 'Part 5', link: '/theory/unit-4/p5' },
              { text: 'Part 6', link: '/theory/unit-4/p6' },
            ],
          },
          {
            text: 'Unit 05 — Java Server Pages',
            items: [
              { text: 'Part 1', link: '/theory/unit-5/p1' },
              { text: 'Part 2', link: '/theory/unit-5/p2' },
              { text: 'Part 3', link: '/theory/unit-5/p3' },
              { text: 'Part 4', link: '/theory/unit-5/p4' },
              { text: 'Part 5', link: '/theory/unit-5/p5' },
              { text: 'Part 6', link: '/theory/unit-5/p6' },
            ],
          },
          {
            text: 'Unit 06 — Hibernate',
            items: [
              { text: 'Part 1', link: '/theory/unit-6/p1' },
              { text: 'Part 2', link: '/theory/unit-6/p2' },
              { text: 'Part 3', link: '/theory/unit-6/p3' },
              { text: 'Part 4', link: '/theory/unit-6/p4' },
              { text: 'Part 5', link: '/theory/unit-6/p5' },
              { text: 'Part 6', link: '/theory/unit-6/p6' },
            ],
          },
        ],
      },
      {
        text: '🧪 Lab',
        items: [
          { text: 'Experiment 01',          link: '/lab/exp-01' },
          { text: 'Experiment 02',                link: '/lab/exp-02' },
          { text: 'Experiment 03',              link: '/lab/exp-03' },
          { text: 'Experiment 04',        link: '/lab/exp-04' },
          { text: 'Experiment 05',        link: '/lab/exp-05' },
          { text: 'Experiment 06',                   link: '/lab/exp-06' },
          { text: 'Experiment 07',              link: '/lab/exp-07' },
          { text: 'Experiment 08',          link: '/lab/exp-08' },
          { text: 'Experiment 09',           link: '/lab/exp-09' },
          { text: 'Experiment 10',                    link: '/lab/exp-10' },
          { text: 'Experiment 11',               link: '/lab/exp-11' },
          { text: 'Experiment 12',              link: '/lab/exp-12' },
        ],
      },
      { text: '📑 Syllabus ',
        items: [
          { text: 'AJP Syllabus', link: '/syllabus' },
          { text: 'Lab Syllabus', link: '/lab-syllabus' },
        ]
      },
    ],

    // ── Separate sidebars per section ─────────────────────────────────────
    sidebar: {
      '/theory/': [
        {
          text: '☕ Unit 01 — Swings',
          collapsed: false,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-1/p1' },
            { text: '📄 Part 2', link: '/theory/unit-1/p2' },
            { text: '📄 Part 3', link: '/theory/unit-1/p3' },
            { text: '📄 Part 4', link: '/theory/unit-1/p4' },
            { text: '📄 Part 5', link: '/theory/unit-1/p5' },
            { text: '📄 Part 6', link: '/theory/unit-1/p6' },
          ],
        },
        {
          text: '🎯 Unit 02 — Event Handling',
          collapsed: true,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-2/p1' },
            { text: '📄 Part 2', link: '/theory/unit-2/p2' },
            { text: '📄 Part 3', link: '/theory/unit-2/p3' },
            { text: '📄 Part 4', link: '/theory/unit-2/p4' },
            { text: '📄 Part 5', link: '/theory/unit-2/p5' },
            { text: '📄 Part 6', link: '/theory/unit-2/p6' },
          ],
        },
        {
          text: '🗄️ Unit 03 — JDBC Programming',
          collapsed: true,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-3/p1' },
            { text: '📄 Part 2', link: '/theory/unit-3/p2' },
            { text: '📄 Part 3', link: '/theory/unit-3/p3' },
            { text: '📄 Part 4', link: '/theory/unit-3/p4' },
            { text: '📄 Part 5', link: '/theory/unit-3/p5' },
            { text: '📄 Part 6', link: '/theory/unit-3/p6' },
          ],
        },
        {
          text: '🌐 Unit 04 — Servlet API',
          collapsed: true,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-4/p1' },
            { text: '📄 Part 2', link: '/theory/unit-4/p2' },
            { text: '📄 Part 3', link: '/theory/unit-4/p3' },
            { text: '📄 Part 4', link: '/theory/unit-4/p4' },
            { text: '📄 Part 5', link: '/theory/unit-4/p5' },
            { text: '📄 Part 6', link: '/theory/unit-4/p6' },
          ],
        },
        {
          text: '📄 Unit 05 — Java Server Pages',
          collapsed: true,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-5/p1' },
            { text: '📄 Part 2', link: '/theory/unit-5/p2' },
            { text: '📄 Part 3', link: '/theory/unit-5/p3' },
            { text: '📄 Part 4', link: '/theory/unit-5/p4' },
            { text: '📄 Part 5', link: '/theory/unit-5/p5' },
            { text: '📄 Part 6', link: '/theory/unit-5/p6' },
          ],
        },
        {
          text: '🏗️ Unit 06 — Hibernate',
          collapsed: true,
          items: [
            { text: '📄 Part 1', link: '/theory/unit-6/p1' },
            { text: '📄 Part 2', link: '/theory/unit-6/p2' },
            { text: '📄 Part 3', link: '/theory/unit-6/p3' },
            { text: '📄 Part 4', link: '/theory/unit-6/p4' },
            { text: '📄 Part 5', link: '/theory/unit-6/p5' },
            { text: '📄 Part 6', link: '/theory/unit-6/p6' },
          ],
        },
      ],

      '/lab/': [
        {
          text: '🧪 Java Lab',
          collapsed: false,
          items: [
            { text: '⚗️ Exp 01 — Login Form (Swing)',     link: '/lab/exp-01' },
            { text: '⚗️ Exp 02 — Progress Bar',           link: '/lab/exp-02' },
            { text: '⚗️ Exp 03 — Traffic Signal',         link: '/lab/exp-03' },
            { text: '⚗️ Exp 04 — Mouse Motion Adapter',   link: '/lab/exp-04' },
            { text: '⚗️ Exp 05 — JDBC Display Records',   link: '/lab/exp-05' },
            { text: '⚗️ Exp 06 — JDBC CRUD',              link: '/lab/exp-06' },
            { text: '⚗️ Exp 07 — Simple Servlet',         link: '/lab/exp-07' },
            { text: '⚗️ Exp 08 — GET & POST Servlet',     link: '/lab/exp-08' },
            { text: '⚗️ Exp 09 — Session & Cookies',      link: '/lab/exp-09' },
            { text: '⚗️ Exp 10 — JSP Form',               link: '/lab/exp-10' },
            { text: '⚗️ Exp 11 — JSP Scripting',          link: '/lab/exp-11' },
            { text: '⚗️ Exp 12 — Hibernate CRUD',         link: '/lab/exp-12' },
          ],
        },
      ],
    },

    outline: { level: [2, 3], label: 'On this page' },

    editLink: {
      pattern: 'https://github.com/kuntalojha/ajp/edit/main/docs/:path',
      text: '✏️ Edit this page on GitHub',
    },

    lastUpdated: {
      text: '🕐 Last updated',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' },
    },

    docFooter: { prev: '⬅️ Previous', next: 'Next ➡️' },
    returnToTopLabel: '⬆️ Back to top',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 <a href="https://kuntalojha.github.io/MRKUNTALOJHA/" target="_blank">Kuntal Ojha</a>',
    },

    socialLinks: [
      { icon: 'github',   link: 'https://github.com/kuntalojha' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mrkuntalojha/' },
      { icon: 'twitter',  link: 'https://x.com/kuntalojha' },
      { icon: 'youtube',  link: 'https://www.youtube.com/@kuntalojhadev' },
    ],
  },
});