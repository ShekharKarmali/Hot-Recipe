const path = require("path");
// const HtmlWebPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devtool: "eval-cheap-source-map",
  //   mode: "development",
  devServer: {
    contentBase: "./dist",
  },
  // Plugins: [
  //   new HtmlWebPlugin({
  //     filename: "index.html",
  //     template: "./src/index.html",
  //   }),
  // ],
};
