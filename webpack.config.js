const path = require('path')

module.exports = {
	entry: {
		main: path.resolve(__dirname, './app/src/main.js'),
	},
	output: {
		path: path.resolve(__dirname, './app/src/'),
		filename: 'script.js',
	},
	module: {
		rules: [
			{
			  test: /\.(?:js|mjs|cjs)$/,
			  exclude: /node_modules/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: [
					['@babel/preset-env', { targets: "defaults" }]
				  ]
				}
			  }
			}
		  ]
	},
	resolve: {
		fallback: {
		  "fs": false,
		  'worker_threads': false,
		  'child_process': false,
		  '@swc/wasm': false,
		  "tls": false,
		  "net": false,
		  "path": false,
		  "zlib": false,
		  "http": false,
		  "https": false,
		  "stream": false,
		  "vm": false,
		  "querystring": false,
		  "os": false,
		  "constants": false,
		  "crypto": false,
		  "buffer": false,
		  "url": false,
		  "assert": false,
		  "tty": false,
		  "crypto-browserify": require.resolve('crypto-browserify'),
		} 
	  }
}