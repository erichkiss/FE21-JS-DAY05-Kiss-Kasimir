// Now you will extend the classes from the previous exercise. 
// Car: Extend with a child class called Motorbike, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: number of wheels.
// Animal: Extend with a child class called Fish, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: type of water it inhabits.
// Person: Extend with a child class called Profession, that will inherit the property and methods from the parent Class, as well as create new properties and methods that are unique to this class. Example: job position.
// Create, using the Child classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too.
class Car {
    brand;
    constructionYear;
    type;
    doors;
    tuev;

    constructor (br, co, ty, doo, tu) {
        this.brand = br;
        this.constructionYear = co;
        this.type = ty;
        this.doors = doo;
        this.tuev = tu;
    }

    showMessageCar() {
        return `${this.brand} and ${this.constructionYear} and ${this.type} and ${this.doors} and ${this.tuev}.<br>`;
    }
}

class Motorbike extends Car {
    luggageRack;
    sideCar;

    constructor (br, co, ty, tu, lugg, side) {
        super(br, co, ty, tu);
        this.luggageRack = lugg;
        this.sideCar = side;
    }

    showMessageMotorbike() {
        return super.showMessageCar() + " and " + this.luggageRack + " and " + this.sideCar + "<br>";
    }
}

var motorbike1 = new Motorbike("Honda", 2020, "Supercross", true, "Back-luggage", false);


var docOutP
var motorbike1 = new Motorbike("Honda", 2020, "Supercross", true, "Back-luggage", false);
docOutP = motorbike1.showMessageMotorbike();

// docOutP += car2.showMessageCar();

// docOutP += car3.showMessageCar();
document.getElementById("output").innerHTML = docOutP;