# system-icon2

An updated fork of [system-icon](https://github.com/mtojo/node-system-icon).

Get associated file/folder icon for Node.js.

## Installation

```bash
$ npm install --save system-icon2
```

### For Electron Apps

If you're using this package in an Electron application, you need to rebuild it for Electron's Node.js version:

```bash
# Install electron-rebuild as a dev dependency
$ npm install --save-dev electron-rebuild

# Rebuild native modules for Electron
$ npx electron-rebuild
```

Or add this to your package.json scripts:

```json
{
  "scripts": {
    "postinstall": "electron-rebuild"
  }
}
```

Alternatively, if using pnpm:

```bash
$ pnpm install --save-dev electron-rebuild
$ pnpm exec electron-rebuild
```

## Supported platforms

* macOS 10.6 or later
* Windows Vista or later

## Usage

Get icon for file or folder path:

```js
const {writeFileSync} = require('fs');
const {
  getIconForPath,
  ICON_SIZE_MEDIUM
} = require('system-icon2');

getIconForPath("/path/to/file_or_folder", ICON_SIZE_MEDIUM, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    writeFileSync("icon.png", result);
  }
});
```

Get icon for file extension:

```js
const {writeFileSync} = require('fs');
const {
  getIconForExtension,
  ICON_SIZE_MEDIUM
} = require('system-icon2');

getIconForExtension(".ext", ICON_SIZE_MEDIUM, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    writeFileSync("icon.png", result);
  }
});
```

## API

### Constants

#### Size constants

The correspondence between the size constants and the icon size actually obtainable on each platform is as follows:

| Constant                | Windows | macOS   |
| ----------------------- | ------- | ------- |
| `ICON_SIZE_EXTRA_SMALL` |  16x16  |  16x16  |
| `ICON_SIZE_SMALL`       |  32x32  |  32x32  |
| `ICON_SIZE_MEDIUM`      |  64x64  |  64x64  |
| `ICON_SIZE_LARGE`       | 256x256 | 256x256 |
| `ICON_SIZE_EXTRA_LARGE` | 256x256 | 512x512 |

### Functions

#### getIconForPath(path, size, callback)

Gets associated icon for file or folder path, and returns it in the PNG format.

#### getIconForExtension(extension, size, callback)

Gets associated icon for file extension, and returns it in the PNG format.

## Troubleshooting

### Electron: "was compiled against a different Node.js version"

If you see an error like:
```
The module was compiled against a different Node.js version using
NODE_MODULE_VERSION 127. This version of Node.js requires
NODE_MODULE_VERSION 140.
```

This happens because the native addon was compiled for regular Node.js, but Electron uses its own Node.js version. Solution:

1. Install `electron-rebuild`:
   ```bash
   npm install --save-dev electron-rebuild
   # or
   pnpm install --save-dev electron-rebuild
   ```

2. Rebuild the native modules for Electron:
   ```bash
   npx electron-rebuild
   # or
   pnpm exec electron-rebuild
   ```

3. If the issue persists, try a clean rebuild:
   ```bash
   # Remove node_modules and rebuild
   rm -rf node_modules package-lock.json
   npm install
   npx electron-rebuild

   # For pnpm users
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   pnpm exec electron-rebuild
   ```

4. You can also add `electron-rebuild` to your postinstall script:
   ```json
   {
     "scripts": {
       "postinstall": "electron-rebuild"
     }
   }
   ```

### Electron: "non context-aware native addons has been disabled"

This package is context-aware and should work with Electron. If you still see this error, ensure you're using the latest version (0.2.0+).

## License

MIT
