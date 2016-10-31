'use strict'

var webpack = require('webpack');
var path    = require('path');

module.exports = {
  entry: [
    "./scripts/main.js"
  ],
  output: {
    path: path.join(__dirname, "static"),
    filename: "bundle.js",
    publicPath: '/static'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'src'],
    fallback: path.join(__dirname, 'node_modules'),
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],
     jshint: {
        camelcase: true,
        emitErrors: false,
        failOnHint: false,
        eqeqeq: true,
        esversion: 6,
        esnext: true,
        futurehostile: true,
        latedef: true,
        nocomma: true,
        nonbsp: true,
        strict: false,
        undef: true,
        unused: true,
        varstmt: true,
        reporter: function(errors) { }
    },
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules\/(?!(chirashi)).+)|vendors|bower_components/,
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },  
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [

  ],
  devtool : '#source-map'
};
