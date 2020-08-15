function Person(name, gender) {

    this.name = name;
    this.gender = gender;
    this.sayHello = function() {
        console.log(this.name + " said Hello")
    }

}

// prototype!
// Person의 prototype 객체에 sayHello라는 메소드를 넣으면 
// Person 생성자로 만든 모든 객체는 이 메소드 사용이 가능
// prototype 으로 만드는 것이 this로 만드는 것보다 훨씬 좋음
// 객체를 공유하기 떄문

Person.prototype.sayHello = function() {
    console.log(this.name + ' said Hello');
}

var person1 = new Person('Zero', 'm');
var person2 = new Person("Hero", 'M');

person1.sayHello();
person2.sayHello();
/*
_proto_ ==  prototype 임
 
*/
var person3 = new Person('Nero', 'm');