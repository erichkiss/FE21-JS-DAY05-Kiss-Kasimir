// create class hotel with three objects, properties are hotelName, numberOfNights (random integer between 1-10) ,adress, image.
// create method inside the class checking if userinput is too long for reservation -> button appears labeled "I'll reserve" otherwise message"Sorry, no available nights for <hotelname>".

class Hotel {
    hotelName;
    numberOfNights = (Math.floor((Math.random()*10)+1));
    addres;
    image;
    
    constructor (hN, a, i) {
        this.hotelName = hN;
        this.addres = a;
        this.image = i;
    }

    createProfile() {
        return `${this.hotelName} ${this.numberOfNights} ${this.addres} ${this.image}<br>`;
    }

    showAvailability() {
        AvailablitityMethod;
    }
}

var hotel1 = new Hotel("Business-Suites","Vis-A-Vis","image");
document.write(hotel1.createProfile());

var hotel2 = new Hotel("Family-Pavillions","3rd Rock from the Sun","image");
document.write(hotel2.createProfile());

var hotel3 = new Hotel("Luxury-Bunker","Coal Shaft Level -1128","image");
document.write(hotel3.createProfile());

function compareNights() {
    var guestRequest = document.getElementById("userInput").value;
    if (guestRequest<=hotel1.numberOfNights) {
        document.getElementById("outputComp").innerHTML = `<input type="button" value="I'll reserve">`;
    } else {
        document.getElementById("outputComp").innerHTML = `<p>Sorry, no available nights for ${hotel1.hotelName}</p>`
    }
}
document.getElementById("requestBut").addEventListener("click",compareNights);