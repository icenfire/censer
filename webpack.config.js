const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  Externals = require("./build-tools/externals"),
  package = require("./package.json");

const externals = {
  react: {
    def: "React",
    link: "https://unpkg.com/react@{version}/umd/react.{mode}.js",
    mode: mode => (mode === "production" ? "production.min" : mode)
  },
  "react-dom": {
    def: "ReactDOM",
    link: "https://unpkg.com/react-dom@{version}/umd/react-dom.{mode}.js",
    mode: mode => (mode === "production" ? "production.min" : mode)
  }
};

module.exports = (env, argv) => {
  return {
    entry: {
      app: ["./src/app/App.tsx"]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].bundle.js"
    },

    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "awesome-typescript-loader"
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "app", "index.html"),
        templateParameters: {
          version: package.version,
          dependencies: Externals.getTags(
            externals,
            package.dependencies,
            argv.mode
          )
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    externals: Externals.getDefs(externals),

    devtool: "source-map",

    devServer: {
      hot: true,
      inline: true,
      open: true
    }
  };
};
