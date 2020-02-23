function getData(params) {
    return params;
}
console.log(getData("Referral").length);
console.log(getData(123));
// Generic type with arrow function
var arrowFunct = function (value) {
    return value;
};
console.log(arrowFunct("Coba data").length);
// to do same above for JS 8 you have to add additional syntax
var arrowFunct2 = function (value) {
};
// or
var arrowFunct3 = function (value) {
};
// or
var arrowFunct4 = function (value) {
};
console.log("================================= Generic Class ========================================");
// Class Generic
var List = /** @class */ (function () {
    // you can use Rest parameter(...) as replacement of array. so instead of you pass array as parameter
    // you can pass many number as parameter
    function List() {
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.getAll = function () { return _this._data; };
        this._data = elements;
    }
    List.prototype.add = function (element) {
        this._data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this._data).push.apply(_a, elements);
    };
    return List;
}());
var myNumber = new List(1, 2, 3);
myNumber.add(4);
myNumber.addMultiple(5, 6, 7);
console.log(myNumber.getAll());
// you can make your class generic accept two different type
var myRandom = new List(1, 2, "a", "b", 3);
myRandom.add("dfsa");
myRandom.addMultiple(4, 7, "c");
console.log(myRandom.getAll());
