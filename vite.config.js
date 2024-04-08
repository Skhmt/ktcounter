import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			includeAssets: [
				'krill180.png',
				'krill192.png',
				'krill512.png',
				'gunplay.woff2',
				'quay.woff2'
			],
			manifest: {
				name: 'Krill Team Counter',
				short_name: 'KTCounter',
				description: 'Helps you count victory and command points in Kill Team',
				theme_color: '#000000',
				background_color: '#000000',
				display: 'fullscreen',
				icons: [
					{
						src: 'krill192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'krill512.png',
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
