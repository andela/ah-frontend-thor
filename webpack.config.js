const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "production";

const config = {
  mode,
  entry: ["babel-polyfill","./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules:[path.resolve(__dirname, "src"),"node_modules"]
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
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
module.exports = config;
