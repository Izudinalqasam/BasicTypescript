// Enum is same with enum in java and kotlin
// you can give the specific value for specific enum variabel
// if you give an enum with number the value of next variable will be increased
// for example JAN = 1, so FEB = 2
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MEI"] = 5] = "MEI";
})(Month || (Month = {}));
// but if you give string value to enum variable, you have to add the value to all other variable
// because enum can't increase the string value
var Day;
(function (Day) {
    Day["SUN"] = "Sunday";
    Day["MON"] = "Monday";
    Day["TUES"] = "Tuesday";
    Day["WED"] = "Wednesday";
    Day["THURS"] = "Thursday";
    Day["Fri"] = "Friday";
    Day["SAT"] = "Saturday";
})(Day || (Day = {}));
console.log(Month.APR);
console.log(Day.Fri);
