// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://rageycomma.github.com',
	base: 'oss-serverless-docs',
	integrations: [
		starlight({
			title: 'OSS-Serverless',
			social: {
				github: 'https://github.com/rageycomma/oss-serverless-docs',
			},
			sidebar: [
				{
					label: 'CLI Commands',
					autogenerate: { directory: 'all-docs/cli-reference' }
				},
				{
					label: 'AWS Events',
					autogenerate: { directory: 'all-docs/events/aws' }
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'all-docs/guides'}
				},
				{
					label: 'Plugins',
					autogenerate: { directory: 'all-docs/plugins'}
				}
			],
		}),
	],
});
