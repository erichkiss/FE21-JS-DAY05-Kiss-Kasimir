// Create 3 different objects for 3 different themes:  car, animal and person. The end result should be 9 objects in total.  These objects should have some properties like name, brand, model, type, color, weight, age... of course inherent to its type because, for instance, an animal has no brand... 
// Each object should have at least one method, that shows some properties about each theme. Feel free to expand on that.
// The message from the methods must be printed on the browser too.

var cars1 = {
    brand: "Audi",
    constructionYear: 2018,
    type: "SUV",
    doors: 4,
    tuev: true,
    // sentence: `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} and has tuev: ${this.tuev}`,

    showWholeCar: function(){return `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} doors and has tuev: ${this.tuev} <br>`}

    // showWholeCar: function(){return this.sentence}
}

var cars2 = {
    brand: "BMW",
    constructionYear: 2001,
    type: "Limousine",
    doors: 2,
    tuev: false,
    // sentence: `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} and has tuev: ${this.tuev}`,

    showWholeCar: function(){return `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} doors and has tuev: ${this.tuev} <br>`}

    // showWholeCar: function(){return this.sentence}
}

var cars3 = {
    brand: "Ford Fiesta",
    constructionYear: 1980,
    type: "Trike",
    doors: 0,
    tuev: false,
    // sentence: `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} and has tuev: ${this.tuev}`,

    showWholeCar: function(){return `This ${this.brand} was constructed in ${this.constructionYear} , is of type ${this.type} , has ${this.doors} doors and has tuev: ${this.tuev} <br>`}

    // showWholeCar: function(){return this.sentence}
}



document.getElementById("output").innerHTML = cars1.showWholeCar();
document.getElementById("output").innerHTML += cars2.showWholeCar();
document.getElementById("output").innerHTML += cars3.showWholeCar();


