// --------------------------------------------------------------------------
// class, but in javascript there is no class, there is prototype as replacement of class
interface QuuxClass {
    quuz: string
    corge: number
}

class Grault {
    // give private modifier to make the object is in private mode
    private graply: string

    constructor(quux: QuuxClass, waldo: number[]) {
        this.graply = quux.corge + " " + quux.quuz + " " + waldo
    }

    // you can put public modifier expecitly or not
    // by default it is public function
    getGarply() {
        return this.graply
    }
}

// you can declare attribute of class just declare it on constructor and give it public modifier
// no need to declare it separately from constructor
class GraultSecond {

    constructor(public name: string) { }
}

console.log(new GraultSecond("alan"))


// Inheritance class
// it will inherit from your parent constructor function and name
class parentColumn {
    constructor(public firstName: string, public secondName: string) { }
}

class firstCplumn extends parentColumn {
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ""

    // to make constructor for this class, make sure you call super() for the first positon in the constructor
    constructor(phone: string, firstN: string, lastN: string){
        super(firstN, lastN)
        this.phone = phone
    }

    // this is static property and method
    static ruleName = "Admin"

    static getRuleName() {
        return "Admin"
    }

    getRole(): { read: boolean, write: boolean} {
        return {
            read : this.read,
            write : this.write
        }
    }
     // tthis is way o declare setter and getter of an attribute
    set email(value: string) {
        this._email = value;
    }
    
    get email(): string {
        return this._email
    }    
}

let firstColumnObj = new firstCplumn("12", "dolpin", "sinega")
console.log(firstColumnObj.phone)

firstColumnObj.email = "AkuPadamu@gmail.com"
console.log(firstColumnObj.email)

console.log(firstCplumn.ruleName)

let bazClass = <QuuxClass>{
    quuz: "ABC",
    corge: 123
}

let fred = new Grault(bazClass, [1, 2, 3])

console.log(fred.getGarply())


// to print into browser 
// document.body.textContent = fred.getGarply()