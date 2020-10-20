const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", "yaml", "yml"],
    modules: ["."],
  },
  plugins: [],
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
      },
      {
        test: /\.ya?ml$/,
        type: "json", // Required by Webpack v4
      },
    ],
  },
  optimization: {
    nodeEnv: false,
  },
};
