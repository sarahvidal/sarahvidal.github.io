/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'sans':["Jost"],
			  'passion':["Passion One"]
			},
			fontSize : {
			  '10xl':'13rem',
			},
			backgroundColor:{
			  'light-red': '#D54F40',
			}
		  },
	},
	plugins: [],
}
