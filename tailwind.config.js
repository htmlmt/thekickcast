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
				200: '#98B6e2',
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
		fontFamily: {
			display: ['Saira Extra Condensed', 'sans-serif'],
			sans: ['Saira', 'sans-serif'],
			mono: ['Roboto Mono', 'sans-serif'],
		},
		fontSize: {
			xs: ['0.8125rem', { lineHeight: '1.5rem' }],
			sm: ['0.875rem', { lineHeight: '1.5rem' }],
			base: ['1rem', { lineHeight: '1.75rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.75rem', { lineHeight: '1.75rem' }],
		},
	},
};
