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
    title: 'Newbie-ish Guide to Astro',
    social: {
      github: 'https://github.com/susansilver',
      mastodon: 'https://mathstodon.xyz/@suzza',
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
    }, {
      label: 'Chapter Two',
      autogenerate: {
        directory: 'Two'
      }
    },{
      label: 'Chapter Three',
      autogenerate: {
        directory: 'Three'
      }
    }, {
      label: 'Chapter Four',
      autogenerate: {
        directory: 'Four'
      }
    }, {
      label: 'Chapter Five',
      autogenerate: {
        directory: 'Five'
      }
    }, {
      label: 'Chapter Six',
      autogenerate: {
        directory: 'Six'
      }
    }, {
      label: 'Chapter Seven',
      autogenerate: {
        directory: 'Seven'
      }
    }
  ]
  }), 
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  }),
    ]
});