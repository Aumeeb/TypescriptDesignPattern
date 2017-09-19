"use strict";
class Road {
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
}
class Vehicle {
    constructor(person) {
        this.person = person;
    }
}
class Person {
    constructor() {
    }
}
class Male extends Person {
    constructor() {
        super();
        this.name = 'male';
    }
    run() {
        console.log(`${this.name} is driving now`);
    }
}
class Bus extends Vehicle {
    constructor() {
        super(...arguments);
        this.name = 'bus';
    }
    run() {
        this.person.run();
        console.log(`I am a bus`);
    }
}
class Street extends Road {
    constructor() {
        super(...arguments);
        this.name = 'royal Street';
    }
    run() {
        this.vehicle.run();
        console.log(`${this.vehicle.name} is on the street !`);
    }
}
class SpeedWay extends Road {
    constructor() {
        super(...arguments);
        this.name = 'queen high speed way';
    }
    run() {
        this.vehicle.run();
        console.log(`${this.vehicle.name} is on the SpeedWay !`);
    }
}
var male = new Male();
var bus = new Bus(male);
var street = new Street(bus);
var speedway = new SpeedWay(bus);
street.run();
