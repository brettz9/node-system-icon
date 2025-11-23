const system = require("./index");
const {writeFile} = require('fs/promises');

// const {getIconForPath, ICON_SIZE_MEDIUM} = require('system-icon2');


// system.getIconForPath("/Applications/Brave Browser.app", system.ICON_SIZE_MEDIUM, (err, result) => {
//     if (err) {
//         console.error(err);
//     } else {
//         writeFileSync("icon.png", result);
//     }
// });

(async () => {
let result;
try {
  result = await system.getIconForPath("/Applications/Brave Browser.app", system.ICON_SIZE_MEDIUM);
} catch (err) {
  console.error(err);
  return;
}

await writeFile("icon.png", result);

let result2;
try {
  result2 = await system.getIconForExtension(".xml", system.ICON_SIZE_MEDIUM);
} catch (err) {
  console.error(err);
  return;
}

await writeFile("icon-ext.png", result2);
})();
