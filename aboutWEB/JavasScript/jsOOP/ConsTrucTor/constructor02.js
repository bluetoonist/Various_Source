/*

prototype, _proto_ 와 constructor 의 관계

Example) 
Person.prototype.constructor == Person;

*/
function Vehicle(name, speed) {
    this.name = name;
    this.speed = speed;

}

Vehicle.prototype.drive = function() {
    console.log(this.name + " Run at " + this.speed);
};


var tico = new Vehicle('tico', 50);
tico.drive();

function Sedan(name, speed, maxSpeed) {
    Vehicle.apply(this, arguments);
    this.maxSpeed = maxSpeed;
}

/* Extend ! */
// 상속하는 수 많은 방법이 있는데 에러가 거의 없는 방법 중 하나입니다
Sedan.prototype = Object.create(Vehicle.prototype); // 객체는 만들되 생성자는 실행하지 않음
Sedan.prototype.constructor = Sedan;
// 새로 적용시킬 메소드 정의
Sedan.prototype.boost = function() {
    console.log(this.name + " boost its spped at " + this.maxSpeed);
}

var sandta = new Sedan('santa', 100, 200);
sandta.drive();
sandta.boost();

/* Practice Truck 생성자를 만들어보자 ! */

function Truck(name, spped, capacity) {
    Vehicle.apply(this, arguments);
    this.capacity = capacity;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
Truck.prototype.load = function(weight) {
    if (weight > this.capacity) {
        return console.error("무겁다!");
    }
    return console.log('적재');

}

var boongboong = new Truck('boongboong', 40, 100);
boongboong.drive();
boongboong.load(120);