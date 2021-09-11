const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "3D.js"),
  output: {
    filename: "3D.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "index.html"),
    }),
  ],
};
