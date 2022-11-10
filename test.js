const { default: generateSyskey } = require("./index");

const syskeylist = [];
let n = 100000000;
for (let i = 0; i < n; i++) {
  const syskey = generateSyskey();
  syskeylist.push(syskey);

  const dataset = [...new Set(syskeylist)];
  console.log(
    `[${i + 1}] Duplicate: ${
      syskeylist.length - dataset.length
    } syskey: ${syskey} `
  );
}
const dataset = [...new Set(syskeylist)];

console.log(`\nDuplicate: ${syskeylist.length - dataset.length}`);
