/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: '#1a202c',
          light: '#2d3748',
          lighter: '#4a5568',
				}
			},
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
