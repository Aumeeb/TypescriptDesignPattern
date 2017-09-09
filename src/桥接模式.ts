//抽象路
abstract class Road {
    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle;
    }
    abstract name: string
    protected vehicle: Vehicle;
    abstract run(): void;
}
//抽象交通工具
abstract class Vehicle {
    constructor(person: Person) {
        this.person = person;
    }
    protected person: Person;
    abstract run(): void;
    abstract name: string;

}
abstract class Person {
    constructor(){
    }
    abstract run(): void;
    abstract name: string;
}
class Male extends Person {
    name: string;
    constructor() {
        super();
        this.name='male'
    }
    run(): void {
        console.log(`${this.name} is driving now`);
    }
}
class Bus extends Vehicle {
    name = 'bus';
    run(): void {
        this.person.run();
        console.log(`I am a bus`);
    }
}
class Street extends Road {
    name: string = 'royal Street'
    run(): void {
        this.vehicle.run();
        console.log(`${this.vehicle.name} is on the street !`);
    }
}
class SpeedWay extends Road {
    name: string = 'queen high speed way';
    run(): void {
        this.vehicle.run();
        console.log(`${this.vehicle.name} is on the SpeedWay !`);
    }
}

var male = new Male();
var bus = new Bus(male);
var street = new Street(bus);
var speedway = new SpeedWay(bus);


street.run();


/**
 * 抽象类A里面包含抽象类 B , 抽象类A在内部调用抽象类B的抽象方法
 * 抽象类B里面包含抽象类 C , 抽象类B在内部调用抽象类C的抽象方法
 * 以此类推，像桥一样可以不断连接，故名桥接。
 */
