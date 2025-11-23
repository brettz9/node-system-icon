'use strict';

module.exports = {
  // Add constants
  ...require('bindings')('addon'),

  getIconForPath (filePath, size, cb) {
    if (cb) {
      return require('bindings')('addon').getIconForPath(filePath, size, cb);
    }

    return new Promise((resolve, reject) => {
      require('bindings')('addon').getIconForPath(filePath, size, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
};
