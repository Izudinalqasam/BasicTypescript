// Control flow in TypeScript like java programming
var firstItem = [1, 2, 3];
for (var key in firstItem) {
    if (firstItem.hasOwnProperty(key)) {
        var element = firstItem[key];
        console.log("For each, the item is - " + element);
    }
}
console.log("\n========================================================================\n");
for (var i = 0; i < firstItem.length; i++) {
    var element = firstItem[i];
    console.log("For loop, the item is - " + element);
}
console.log("\n========================================================================\n");
var indexDoWhile = 0;
do {
    console.log("Do while, the item is - " + indexDoWhile);
    if (indexDoWhile == 5) {
        break;
    }
    indexDoWhile++;
} while (true);
console.log("\n========================================================================\n");
var indexWhile = 0;
while (indexWhile <= 10) {
    if (indexWhile % 2 == 0) {
        indexWhile++;
        continue;
    }
    console.log("While, the item is - " + indexWhile);
    indexWhile++;
}
console.log(true ? "Benar" : "Salah");
