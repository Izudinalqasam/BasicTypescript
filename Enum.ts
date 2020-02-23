// Enum is same with enum in java and kotlin

// you can give the specific value for specific enum variabel
// if you give an enum with number the value of next variable will be increased
// for example JAN = 1, so FEB = 2
enum Month {
    JAN  = 1,
    FEB,
    MAR,
    APR,
    MEI
}

// but if you give string value to enum variable, you have to add the value to all other variable
// because enum can't increase the string value
enum Day {
    SUN = "Sunday",
    MON = "Monday",
    TUES = "Tuesday",
    WED = "Wednesday",
    THURS = "Thursday",
    Fri = "Friday",
    SAT = "Saturday"
}

console.log(Month.APR)
console.log(Day.Fri)
