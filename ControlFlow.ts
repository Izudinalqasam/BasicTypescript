// Control flow in TypeScript like java programming
let firstItem = [1, 2, 3]
for (const key in firstItem) {
    if (firstItem.hasOwnProperty(key)) {
        const element = firstItem[key];
        console.log("For each, the item is - " + element)
    }
}

console.log("\n========================================================================\n")

for (let i = 0; i < firstItem.length; i++) {
    const element = firstItem[i];
    console.log("For loop, the item is - " + element)
}

console.log("\n========================================================================\n")

let indexDoWhile = 0
do {
    console.log("Do while, the item is - " + indexDoWhile)

    if (indexDoWhile == 5) {
        break
    }

    indexDoWhile++
} while (true);

console.log("\n========================================================================\n")

let indexWhile = 0;
while (indexWhile <= 10) {
    
    if (indexWhile % 2 == 0) {
        indexWhile++
        continue
    }

    console.log("While, the item is - " + indexWhile)
    indexWhile++
}

console.log(true ? "Benar" : "Salah")