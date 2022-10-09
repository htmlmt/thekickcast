/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			black: '#000000',
			yellow: {
				400: '#f2f251',
			},
			blue: {
				100: '#cbdbf2',
				200: '#98b6e2',
				700: '#72b2f2',
				800: '#596c82',
			},
			gray: {
				50: '#eaeaea',
				400: '#939393',
				700: '#4a4a4a',
				900: '#1a1a1a',
			},
		},
		extend: {
			backgroundImage: {
				'header-pattern': "url('/graph-paper.svg')",
			},
			backgroundSize: {
				24: '24px',
			},
			maxWidth: {
				page: '768px',
				site: '960px',
			},
			rotate: {
				'-1': '-1deg',
				'1': '1deg',
			},
			width: {
				30: '7.5rem',
			},
		},
		fontFamily: {
			display: ['Saira Extra Condensed', 'sans-serif'],
			sans: ['Saira', 'sans-serif'],
			serif: ['Playfair Display', 'serif'],
			mono: ['Roboto Mono', 'sans-serif'],
		},
		screens: {
			'md': '820px',
			'lg': '1024px',
		}
	},
};
