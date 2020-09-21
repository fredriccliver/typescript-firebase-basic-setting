const path = require("path")

module.exports = {
  mode: "development", // "production" | "development" | "none"
  watch: true,
  devtool: "source-map", // enum
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: {
    index: "./src/index.ts",
  }, // string | object | array
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public/lib", // string
    path: path.resolve(__dirname, "public/lib"), // string
    filename: "[name].bundle.js", // string
  },
}
