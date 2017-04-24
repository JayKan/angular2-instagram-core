'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ENV, dir } = require('./helpers');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = (env) => {
  return webpackMerge(commonConfig({ env: ENV }), {
    devtool: 'source-map',
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            'awesome-typescript-loader',
            'angular2-template-loader'
          ],
          exclude: [/\.(spec|e2e|d)\.ts$/]
        }
      ]
    },
    entry: {
      'index': './src/index.ts'
    },
    output: {
      path: dir('release'),
      libraryTarget: 'umd',
      library: 'angular2-instagram-core',
      umdNamedDefine: true
    },
    externals: {
      '@angular/platform-browser-dynamic': '@angular/platform-browser-dynamic',
      '@angular/platform-browser': '@angular/platform-browser',
      '@angular/core': '@angular/core',
      '@angular/common': '@angular/common',
      '@angular/http': '@angular/http',
      '@ngrx/core': '@ngrx/core',
      '@ngrx/core/add/operator/select': '@ngrx/core/add/operator/select',
      '@ngrx/store': '@ngrx/store',
      '@ngrx/effects': '@ngrx/effects',
      'immutable': 'immutable',
      'rxjs': 'rxjs',
      'rxjs/Rx': 'rxjs/Rx',
      'rxjs/Observable': 'rxjs/Observable',
      'rxjs/add/operator/switchMap': 'rxjs/add/operator/switchMap',
      'rxjs/add/operator/map': 'rxjs/add/operator/map',
      'rxjs/add/operator/catch': 'rxjs/add/operator/catch',
      'rxjs/add/observable/of': 'rxjs/add/observable/of',
      'rxjs/add/operator/distinctUntilChanged': 'rxjs/add/operator/distinctUntilChanged',
      'rxjs/add/operator/let': 'rxjs/add/operator/let',
      'zone.js/dist/zone': 'zone.js/dist/zone'
    },
    plugins: [
      new CheckerPlugin()
    ]
  });
};
