const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  entry: slsw.lib.entries,
  devtool: "source-maps",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  externals: {},
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true
            }
          }
        ]
      }
    ]
  }
};
