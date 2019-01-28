const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpackPluginConfig = new CopyWebpackPlugin([
         {from:'./assets/img',to:'img'},
         {from:'./assets/font',to:'font'}
     ]);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      assets: path.resolve(__dirname, './assets'),
      img: path.resolve(__dirname, './assets/img'),
      components: path.resolve(__dirname, './src/components'),
      dumbData: path.resolve(__dirname, './src/dumbData'),
      pages: path.resolve(__dirname, './src/pages'),
      actions: path.resolve(__dirname, './src/actions'),
      constants: path.resolve(__dirname, './src/constants'),
      modals: path.resolve(__dirname, './src/modals'),
      utils: path.resolve(__dirname, './src/utils'),
      i18n: path.resolve(__dirname, './i18n')
    }
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }, { test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    CopyWebpackPluginConfig
  ],
  devServer: {
    contentBase: '/dist',
    historyApiFallback: true,
    host: 'demo-react.com',
    port: 3001
  }
}
