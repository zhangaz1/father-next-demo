export default {
	platform: 'browser',
	bundler: true,
	formats: [
		['cjs', {
			entryPoints: {
				'src/index.ts': {},
			}
		}],
		'esm',
		'umd'
	],
	// formats: {
	// 	umd: {
	// 		minFile: true,
	// 	},
	// },
}