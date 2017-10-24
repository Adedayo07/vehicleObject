class Vehicle {
    constructor (make, model, color, year) {
       this.make = make;
       this.model = model;
       this.color = color;
       this.year = year;
       this.speed;
       this.wheels;
    }

    name() {
      return (this.make +" " +this.model);
    }

    rest() {
        if (typeof(this.speed) == 'undefined'){
          this.speed = 0;
          return this.speed
        }
        else{
            return 'Motion activated';
        }
    }

    accelerate() {
        if ((typeof(this.speed) == 'number') &&(this.speed <= 200)){
            return ++this.speed + 'm/s';
        }
        else if (this.speed >200){
              return ("Caution!!! speed limit reached")
        }
    }

    decelerate() {
        if (this.speed > 0){
            return --this.speed;
        }
        else {
            return this.speed;
        }
    }
}


class  SaloonCar extends Vehicle {
    constructor(make, model, color, year) {
      super(make, model, color, year);
      this.wheels = 4;
      this.speed = 200;
    }

    speedlimit() {
        if (this.speed >= 200){
            return "Caution! speed limit"
        }
        else if (this.speed > 70 && this.speed <150) {
            return "Motion activated";
        }
        else if (this.speed > 1 && this.speed <105){ 
            return "Slow!";
        }
    }
}

class Truck extends Vehicle {
    constructor(make, model, color, year) {
      super(make, model, color, year);
      this.wheels = 10;
      this.speed = 100;
    }

    speedlimit() {
        if (this.speed > 150){
            return "Caution! speed limit"
        }
        else if (this.speed > 70 && this.speed < 150) {
            return "Motion activated";
        }
        else if (this.speed > 1 && this.speed <70){ 
            return "Slow!";
        }
    }
}

Keke = new Vehicle('Keke', 'maruwa', 'yellow', 2010)
benz = new SaloonCar('honda', 'accord', 'white', 2017)
ford = new Truck('Ford', 'fiat', 'brown', 1998)
console.log(ford.speedlimit())
console.log(benz.speedlimit())
benz.speed=100
console.log(benz.speedlimit())