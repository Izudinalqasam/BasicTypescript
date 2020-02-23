var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.graply = quux.corge + " " + quux.quuz + " " + waldo;
    }
    // you can put public modifier expecitly or not
    // by default it is public function
    Grault.prototype.getGarply = function () {
        return this.graply;
    };
    return Grault;
}());
// you can declare attribute of class just declare it on constructor and give it public modifier
// no need to declare it separately from constructor
var GraultSecond = /** @class */ (function () {
    function GraultSecond(name) {
        this.name = name;
    }
    return GraultSecond;
}());
console.log(new GraultSecond("alan"));
// Inheritance class
// it will inherit from your parent constructor function and name
var parentColumn = /** @class */ (function () {
    function parentColumn(firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
    }
    return parentColumn;
}());
var firstCplumn = /** @class */ (function (_super) {
    __extends(firstCplumn, _super);
    // to make constructor for this class, make sure you call super() for the first positon in the constructor
    function firstCplumn(phone, firstN, lastN) {
        var _this = _super.call(this, firstN, lastN) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    firstCplumn.getRuleName = function () {
        return "Admin";
    };
    firstCplumn.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(firstCplumn.prototype, "email", {
        get: function () {
            return this._email;
        },
        // tthis is way o declare setter and getter of an attribute
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    // this is static property and method
    firstCplumn.ruleName = "Admin";
    return firstCplumn;
}(parentColumn));
var firstColumnObj = new firstCplumn("12", "dolpin", "sinega");
console.log(firstColumnObj.phone);
firstColumnObj.email = "AkuPadamu@gmail.com";
console.log(firstColumnObj.email);
console.log(firstCplumn.ruleName);
var bazClass = {
    quuz: "ABC",
    corge: 123
};
var fred = new Grault(bazClass, [1, 2, 3]);
console.log(fred.getGarply());
// to print into browser 
// document.body.textContent = fred.getGarply()
