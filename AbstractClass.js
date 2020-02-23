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
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    vehicle.prototype.start = function () {
        console.log("the wheels of this class is " + this.wheels);
    };
    return vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return car;
}(vehicle));
var motorCycle = /** @class */ (function (_super) {
    __extends(motorCycle, _super);
    function motorCycle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheels = 4;
        return _this;
    }
    return motorCycle;
}(vehicle));
var carObj = new car();
console.log(carObj.start());
console.log(carObj.wheels);
