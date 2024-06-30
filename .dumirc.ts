import { defineConfig } from 'dumi';
import { Github } from 'lucide-react';

import { homepage } from './package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: Github,
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: 'https://github.com/aipmhub/aipm-chat',
      text: 'Try it on AiPMChat',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by AiPMHub',
  name: 'Search Engine',
  socialLinks: {
    discord: 'https://discord.gg/sYB5zSyD',
    github: homepage,
  },
};

export default defineConfig({
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/magnifying-glass-tilted-left.webp',
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  outputPath: 'docs-dist',
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Search Engine - AiPM Chat Plugin',
});
