const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  public: './',
};

const PAGES_DIR = `${PATHS.src}/pug/pages/`;

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.public}js/[name].[hash].js`,
    path: PATHS.dist,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        exclude: [/fonts/, /static/],
        options: {
          name: `../img/[name].[ext]`,
          emitFile: false,
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '../fonts/[name].[ext]',
          emitFile: false,
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.public}css/[name].[hash].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/pug/utils/logo-ui-kit/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/logotype/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/checkbox/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/radio-buttons/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/radio-buttons/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/comments/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/forms/room/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/pages/landing-page/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/pages/signup/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/pages/room-details/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/includes/footer/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/pug/utils/info-img/img`,
          to: 'img'
        },
        {
          from: `${PATHS.src}/fonts`,
          to: `${PATHS.public}fonts`
        },
        {
          from: `${PATHS.src}/static`,
          to: ''
        },
      ]
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}colors-and-type/colors-and-type.pug`,
      filename: './colors-and-type.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}form-elements/form-elements.pug`,
      filename: './form-elements.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}cards/cards.pug`,
      filename: './cards.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}headers-and-footers/headers-and-footers.pug`,
      filename: './headers-and-footers.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}landing-page/landing-page.pug`,
      filename: './landing-page.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}signup/signup.pug`,
      filename: './signup.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}signin/signin.pug`,
      filename: './signin.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}room-details/room-details.pug`,
      filename: './room-details.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}search-room/search-room.pug`,
      filename: './search-room.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}_link-list/link-list.pug`,
      filename: './index.html',
      favicon: `${PATHS.src}/static/favicon.ico`
    }),
  ]
};