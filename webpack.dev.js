const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { watchFile } = require("fs");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
});
