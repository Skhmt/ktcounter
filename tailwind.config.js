/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		minHeight: {
			'half': '50%'
		},
		minWidth: {
			'half': '50%'
		},
		extend: {}
	},
	daisyui: {
		themes: [
			// 'synthwave',
			// 'luxury',
			// 'business',
			// 'sunset',
			// 'night',
			// 'halloween',
			// 'dracula',
			// 'dark',
			// 'dim',
			{
				mytheme: {
					'primary': '#F25B21',

					'secondary': '#22D1F2',

					'accent': '#22F289',

					'neutral': '#496C73',

					'base-100': '#332E2C',

					'info': '#2237F2',

					'success': '#22F2CF',

					'warning': '#F2EE22',

					'error': '#F22228',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}

