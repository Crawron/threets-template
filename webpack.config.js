const path = require('path');

module.exports = {
	entry: './src/main.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
				exclude: /node_modules/
			}
		]
	},
	mode: 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	devServer: {
		contentBase: './build',
		port: '8080'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	}
};