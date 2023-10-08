const starlightPlugin = require('@astrojs/starlight-tailwind');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.rose,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.slate,
			},
		},
	},
	plugins: [starlightPlugin()],
}


