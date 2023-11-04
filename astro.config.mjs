import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Docs with Tailwind',
		customCss: [
				// Path to your Tailwind base styles:
				'./src/styles/tailwind.css',
			],
    title: 'My Docs',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Getting Sarted',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Introduction to Astro',
        link: '/introduction/astro/'
      }]
    }, {
      label: 'Chapter One',
      autogenerate: {
        directory: 'One'
      }
    }]
  }), 
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),
    ]
});