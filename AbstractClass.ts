abstract class vehicle {
    abstract wheels: number

    start(): void {
        console.log("the wheels of this class is " + this.wheels)
    }
}

class car extends vehicle {
    wheels: number = 4;

}

class motorCycle extends vehicle {
    wheels: number = 4;

}

let carObj = new car()
console.log(carObj.start())
console.log(carObj.wheels)