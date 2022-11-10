"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function generateSyskey(bit = 64) {
    const parsedUuid = (0, uuid_1.parse)((0, uuid_1.v4)());
    let buffer = Buffer.from(parsedUuid);
    let result = 0;
    if (bit < 64) {
        result = buffer[`readUInt${bit}BE`](0);
    }
    else {
        result = buffer[`readBigUInt${bit}BE`](0);
    }
    return Number(result);
}
exports.default = generateSyskey;
