function getData<T>(params: T): T {
    return params
}

console.log(getData("Referral").length)
console.log(getData(123))

// Generic type with arrow function
const arrowFunct = <T>(value: T) => {
    return value
}

console.log(arrowFunct("Coba data").length)

// to do same above for JS 8 you have to add additional syntax
const arrowFunct2 = <T,>(value: T) => {

}

// or
const arrowFunct3 = <T extends {}>(value: T) => {

}

// or
const arrowFunct4 = <T extends unknown>(value: T) => {

}

console.log("================================= Generic Class ========================================")
// Class Generic
class List<T> {
    private _data: T[]

    // you can use Rest parameter(...) as replacement of array. so instead of you pass array as parameter
    // you can pass many number as parameter
    constructor(...elements: T[]) {
        this._data = elements
    }

    add(element: T) {
        this._data.push(element)
    }

    addMultiple(...elements: T[]) {
        this._data.push(...elements)
    }

    getAll = () => this._data;
}

let myNumber = new List(1, 2, 3)
myNumber.add(4)
myNumber.addMultiple(5, 6, 7)
console.log(myNumber.getAll())

// you can make your class generic accept two different type
let myRandom = new List<number | string>(1, 2, "a", "b", 3)
myRandom.add("dfsa")
myRandom.addMultiple(4, 7, "csudo")
console.log(myRandom.getAll())

