// Type data in typeScript
function greeting(person: string) {
    return "Hello " + person
}

function greetingNumber(value: number) {
    return value * value;
}

function greetingArray(arrayPerson: string[]) {
    let fullPerson: string = ""
    arrayPerson.forEach(element => {
        fullPerson += element
    });

    return fullPerson
}

// you can give fucntion tipe data to show the intent of the function
function greetingBoolean(status: boolean): void {

}

function greetingVoid(nothing: void) {

}

function greetingUndefined(nothing: undefined) {

}

console.log(greetingArray(["doni ", "jude ", "sarmin"]))

// the ? sign means that this parameter is optional 
// so you can call the function without passing any parameter
// if you don't pass any parameter, the parameter of the function will be undefined object
// NOte : Number cannot be comnbined with undefined object or variable
function greetingTwo(person?: string) {
    return "Hello " + person + " from greeting 2"
}

// this function using type annotation named Union
// so you can passing parameter to this function match for three type bellow
function greetingThree(person: "car" | "motor" | 1) {
    return "Hello " + person + "from greeting 3"
}

greetingThree("car")
greetingThree("motor")
greetingThree(1)

// this is an example how to use default parameter
const defaultParam = (fisrt: string, second: string = "Nubita") => {
    return fisrt + " " + second
}

console.log(defaultParam("numero"))

// this will make compile errot because paman doesn't match with one of those parameter (car, motor, 1)
// greetingThree("paman") 

// this is the object type data
let firstJourney = {
    distance: 10,
    time: 1
}

// or you can explicitly declare it
type ParentJourney = {
    distance: number
    time: number
}

let secondJourney: ParentJourney = {
    distance: 10,
    time: 1
}

// type data union
// this is useful when you want to store different value type into a single variabel
let myPhone: number | string
myPhone = 628898
myPhone = "62880" // if you change it into boolean, you will get an error

console.log(myPhone)

let user = "Aliudin"
console.log(greeting(user))

// you can assign the tipe of variable with type keyword like below
type Age = number;
let monthAge: Age = 9; // if you give string value it will error

//you can also use type to be function type for variable
type Addtional = (val1: number, val2: number) => number
// you can explicitly declare the type data of the arrow function
const add: Addtional = (val1: number, val2: number) => {
    return val1 + val2
}

console.log(add(4, 3))
// --------------------------------------------------------------------------------------------------------
// Tuple is array with limited data, but you can store anything into it

let biodata: [string, number]
biodata = ["Kurama", 1]
//this will make an error
// biodata = ["Kasin", "Junaidi"]
// biodata = ["Lama", 1, false]

