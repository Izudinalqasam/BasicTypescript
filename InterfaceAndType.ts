// -------------------------------------------------------------------------
// Interface and Types
// note: if you compile typescript into javascript, type and interface will not be written as type or interface

// you can declare interface like this
interface Quux {
    quuz: string
    corge: number
}

// or you can declare Quux as a type, it give same behaviors
// using this way give you full information about the variabel inside the type
// when you hover on the type in the function parameter
// type Quux = {
//     quuz: string
//     corge: number
// }

function greetingQuux(bar: Quux) {
    return "Hello " + bar.quuz + " and the number of " + bar.corge
}

// we can explicitly put Quuz: Type or generic type before the objec
let baz = <Quux>{
    quuz: "ABC",
    corge: 1
}

console.log(greetingQuux(baz))

// you can combine two interface with different variabel member as united class
interface Quux1 {
    name: string
}

interface Quux1 {
    score: number

    getDatas(): string
}

let baz1: Quux1 = {
    name: "Suha",
    score: 10,

    getDatas() {
        return ""
    }
}

function greetingQuux1(bar: Quux1){
    return "Hello " + bar.name + " and the number of " + bar.score
}

console.log(greetingQuux1(baz1))