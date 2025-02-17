/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  'sans': ["Jost"],
		  'passion': ["Passion One"]
		},
		fontSize: {
		  '11xl': '13rem',
		  '10xl': '10rem',
		},
		screens: {
		  'xs': '500px',
		  'lg2': '1200px',
		  'xl2': '1360px',
		},
		translate: {
		  '33': '8.45rem',
		  '38': '9.3rem',
		  '13': '3.1rem',
		  '18': '4.4rem',
		},
		colors:{
			'bleu': '#001AFF'
		}
	  },
	},
	plugins: [],
  }
  