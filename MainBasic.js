// Type data in typeScript
function greeting(person) {
    return "Hello " + person;
}
function greetingNumber(value) {
    return value * value;
}
function greetingArray(arrayPerson) {
    var fullPerson = "";
    arrayPerson.forEach(function (element) {
        fullPerson += element;
    });
    return fullPerson;
}
// you can give fucntion tipe data to show the intent of the function
function greetingBoolean(status) {
}
function greetingVoid(nothing) {
}
function greetingUndefined(nothing) {
}
console.log(greetingArray(["doni ", "jude ", "sarmin"]));
// the ? sign means that this parameter is optional 
// so you can call the function without passing any parameter
// if you don't pass any parameter, the parameter of the function will be undefined object
// NOte : Number cannot be comnbined with undefined object or variable
function greetingTwo(person) {
    return "Hello " + person + " from greeting 2";
}
// this function using type annotation named Union
// so you can passing parameter to this function match for three type bellow
function greetingThree(person) {
    return "Hello " + person + "from greeting 3";
}
greetingThree("car");
greetingThree("motor");
greetingThree(1);
// this is an example how to use default parameter
var defaultParam = function (fisrt, second) {
    if (second === void 0) { second = "Nubita"; }
    return fisrt + " " + second;
};
console.log(defaultParam("numero"));
// this will make compile errot because paman doesn't match with one of those parameter (car, motor, 1)
// greetingThree("paman") 
// this is the object type data
var firstJourney = {
    distance: 10,
    time: 1
};
var secondJourney = {
    distance: 10,
    time: 1
};
// type data union
// this is useful when you want to store different value type into a single variabel
var myPhone;
myPhone = 628898;
myPhone = "62880"; // if you change it into boolean, you will get an error
console.log(myPhone);
var user = "Aliudin";
console.log(greeting(user));
var monthAge = 9; // if you give string value it will error
// you can explicitly declare the type data of the arrow function
var add = function (val1, val2) {
    return val1 + val2;
};
console.log(add(4, 3));
// --------------------------------------------------------------------------------------------------------
// Tuple is array with limited data, but you can store anything into it
var biodata;
biodata = ["Kurama", 1];
//this will make an error
// biodata = ["Kasin", "Junaidi"]
// biodata = ["Lama", 1, false]
