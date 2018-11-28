const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "production";

const config = {
	mode,
	entry: ["./src/index.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ["babel-loader"]
			},
			{
				test: /\.s?css/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i,
				use: ["file-loader"]
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html"
		})
	]
};

module.exports = config;
