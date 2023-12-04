import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			includeAssets: [
				'ktc180.png',
				'ktc192.png',
				'ktc512.png'
			],
			manifest: {
				name: 'Kill Team Counter',
				short_name: 'KTCounter',
				description: 'Helps you count victory and command points in Kill Team',
				theme_color: '#000000',
				icons: [
					{
						src: 'ktc192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'ktc512.png',
						sizes: '512x512',
						type: 'image/png'
					},
				]
			},
			registerType: 'autoUpdate'
		})
	],
	base: './'
})
