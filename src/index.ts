import { parse, v4 } from "uuid";

export default function generateSyskey(bit: number = 64) {
  const parsedUuid: any = parse(v4());
  let buffer = Buffer.from(parsedUuid);
  let result = 0;
  if (bit < 64) {
    result = buffer[`readUInt${bit}BE`](0);
  } else {
    result = buffer[`readBigUInt${bit}BE`](0);
  }
  return Number(result);
}
