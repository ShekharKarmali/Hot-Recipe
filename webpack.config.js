const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devtool: "eval-cheap-source-map",
  //   mode: "development",
  devServer: {
    contentBase: "./dist",
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
