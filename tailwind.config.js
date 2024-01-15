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
			primary: {
				300: '#f990e8',
				400: '#ef3270',
			},
			secondary: {
				400: '#0cd2d3',
			},
			accent: {
				400: '#f2f252',
			},
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
				700: '#212121',
				900: '#1a1a1a',
			},
		},
		extend: {
			backgroundImage: {
				'header-pattern': "url('/background-sprinkles.svg')",
			},
			maxWidth: {
				episode: '300px',
				page: '960px',
			},
			width: {
				30: '7.5rem',
			},
		},
		fontFamily: {
			display: ['Impact', 'sans-serif'],
			sans: ['Roboto', 'sans-serif'],
			mono: ['Roboto Mono', 'sans-serif'],
		},
		screens: {
			md: '820px',
			lg: '1024px',
		},
	},
};
