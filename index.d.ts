export let ICON_SIZE_EXTRA_SMALL: number;
export let ICON_SIZE_SMALL: number;
export let ICON_SIZE_MEDIUM: number;
export let ICON_SIZE_LARGE: number;
export let ICON_SIZE_EXTRA_LARGE: number;
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
export function getIconForExtension(extension: string, size: number, cb?: (err: NodeJS.ErrnoException | null, uint8?: Uint8Array<ArrayBufferLike>) => void): any;
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
export function getIconForPath(filePath: string, size: number, cb?: (err: NodeJS.ErrnoException | null, uint8?: Uint8Array<ArrayBufferLike>) => void): any;
