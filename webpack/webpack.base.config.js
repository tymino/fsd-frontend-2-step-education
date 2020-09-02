const path = require('path');
const fs = require('fs');
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
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

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
          from: `${PATHS.src}/fonts`,
          to: `${PATHS.public}fonts`
        },
        {
          from: `${PATHS.src}/static`,
          to: ''
        },
      ]
    }),
    // ...PAGES.map(page => new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/${page}`,
    //   filename: `./${page.replace(/\.pug/,'.html')}`
    // })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}colors-type/colors-type.pug`,
      filename: './colors-type.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}form-elements/form-elements.pug`,
      filename: './form-elements.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}cards/cards.pug`,
      filename: './cards.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}headers-footers/headers-footers.pug`,
      filename: './headers-footers.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}landing-page/landing-page.pug`,
      filename: './landing-page.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}signup/signup.pug`,
      filename: './signup.html',
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}signin/signin.pug`,
      filename: './signin.html',
    }),
  ]
};

// module.exports = (env, argv) => {
//   (argv.mode === 'production') ? 'source/' : 'public/'

//   return /* baseConfig object */
// }