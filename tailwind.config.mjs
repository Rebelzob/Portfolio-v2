/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backdropBlur: {
				'none': '0',
				'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
			}
		},
	},
	variants: {
		extend:{
			backdropBlur: ['responsive']
		}
	},
	plugins: [],
}
