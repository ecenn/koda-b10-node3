import { createInterface } from "node:readline/promises";
import * as process from "node:process";

export async function getInput() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input1 = Number(await rl.question(`Masukan angka pertama: `));
  const input2 = Number(await rl.question(`Masukan angka kedua: `));
  rl.close()

  if (Number.isNaN(input1) || Number.isNaN(input2)) {
    return new Error("Input yang dimasukan tidak valid");
  }

  return [input1, input2];
}
