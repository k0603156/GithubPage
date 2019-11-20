const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js", "./src/style/main.scss"],
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: '/dist/',
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "src/")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Resume",
      template: path.join(__dirname, "./src/index.html"),
      inject: true,
      showErrors: true,
      cache: true, //변경된경우에
      filename: path.join(__dirname, "./dist/index.html"),
      meta: {
        charset: {
          charset: "utf-8"
        },
        viewport: "width=device-width, initial-scale=1"
      }
    }),
    new VueLoaderPlugin()
  ],
  target: "web",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8000,
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  }
};
