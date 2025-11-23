'use strict';

const addon = require('bindings')('addon');

module.exports = {
  // Add constants
  ICON_SIZE_EXTRA_SMALL: /** @type {number} */ (addon.ICON_SIZE_EXTRA_SMALL),
  ICON_SIZE_SMALL: /** @type {number} */ (addon.ICON_SIZE_SMALL),
  ICON_SIZE_MEDIUM: /** @type {number} */ (addon.ICON_SIZE_MEDIUM),
  ICON_SIZE_LARGE: /** @type {number} */ (addon.ICON_SIZE_LARGE),
  ICON_SIZE_EXTRA_LARGE: /** @type {number} */ (addon.ICON_SIZE_EXTRA_LARGE),

  /**
   * @typedef {(
   *   err: NodeJS.ErrnoException|null,
   *   uint8?: Uint8Array<ArrayBufferLike>
   * ) => void} IconForExtensionCallback
   */

  /**
   * @param {string} extension
   * @param {number} size
   * @param {IconForExtensionCallback} [cb]
   */
  getIconForExtension (extension, size, cb) {
    if (cb) {
      return require('bindings')('addon').getIconForExtension(extension, size, cb);
    }

    return new Promise((resolve, reject) => {
      require('bindings')('addon').getIconForExtension(
        extension,
        size,
        /** @type {IconForExtensionCallback} */
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    );
  },

  /**
   * @typedef {(
   *   err: NodeJS.ErrnoException|null,
   *   uint8?: Uint8Array<ArrayBufferLike>
   * ) => void} IconForPathCallback
   */

  /**
   * @param {string} filePath
   * @param {number} size
   * @param {IconForPathCallback} [cb]
   */
  getIconForPath (filePath, size, cb) {
    if (cb) {
      return require('bindings')('addon').getIconForPath(filePath, size, cb);
    }

    return new Promise((resolve, reject) => {
      require('bindings')('addon').getIconForPath(
        filePath,
        size,
        /** @type {IconForPathCallback} */
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    );
  }
};
