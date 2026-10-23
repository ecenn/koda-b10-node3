import { addition } from "./lib/addition.mjs";
import { subtract } from "./lib/subtract.mjs";
import { multiplication } from "./lib/multiplication.mjs";
import { division } from "./lib/division.mjs";
import { getInput } from "./lib/interactive.mjs";
import { createInterface } from "node:readline/promises";
import * as process from "node:process";

async function home() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ans = await rl.question(`
    - Calculator Lite -
    
      1. Penjumlahan (+)
      2. Pengurangan (-)
      3. Perkalian (×)
      4. Pembagian (÷)
      0. Keluar

    Pilih opsi: `)

  rl.close()

  return Number(ans)
}
  
async function main() {
  const ans = await home()

  if (ans === 1) {
    console.log(`
      - Penjumlahan -
      `)
    const [a, b] = await getInput()
    console.log(`
      Hasil ${a} + ${b} = ${addition(a,b)}
      `)
  } else if (ans === 2) {
    console.log(`
      - Pengurangan -
      `)
    const [a, b] = await getInput()
    console.log(`
      Hasil ${a} - ${b} = ${subtract(a,b)}
      `)
  } else if (ans === 3) {
    console.log(`
      - Perkalian -
      `)
    const [a, b] = await getInput()
    console.log(`
      Hasil ${a} × ${b} = ${multiplication(a,b)}
      `)
  } else if (ans === 4) {
    console.log(`
      - Pembagian -
      `)
    const [a, b] = await getInput()
    console.log(`
      Hasil ${a} ÷ ${b} = ${division(a,b)}
      `)
  } else if (ans === 0) {
    console.log(`
      Sampai jumpa lagi!
      `)
  }
}

main()