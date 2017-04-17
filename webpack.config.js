'use strict';

switch (process.env.NODE_ENV) {
  case 'package':
    module.exports = require('./config/webpack.package')({ env: 'package' });
    break;
}