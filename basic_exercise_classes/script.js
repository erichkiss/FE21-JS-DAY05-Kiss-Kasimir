// Create 3 different classes:  car, animal and person. These classes should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
// Each class should have at least one method, that shows some properties about each theme. Feel free to expand on that.
// Create, using the classes, 3 different objects for each class.
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

var docOutP
var car1 = new Car("Audi", 1998, "SUV", 6, true);
docOutP = car1.showMessageCar();
var car2 = new Car("BMW", 1900, "Limo", 4, true);
docOutP += car2.showMessageCar();
var car3 = new Car("VW", 1940, "Caprio", 3, false);
docOutP += car3.showMessageCar();
document.getElementById("output").innerHTML = docOutP;

class Animal {
    aName;
    type;
    food;
    extinct;
    color;
}

class Person {
    fName;
    lName;
    pAge;
    gender;
    swimmer;
}