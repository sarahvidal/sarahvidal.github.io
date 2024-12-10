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
			  '11xl':'13rem',
			  '10xl':'10rem',
			},
			backgroundColor:{
			  'light-red': '#D54F40',
			},
			screens:{
				'xs': '500px',
			}
		  },
	},
	plugins: [],
}
