/*
    Object

    객체.hasOwnProperty(속성명);

*/

console.log("=================================");
var obj = {
    example: 'yes',
};

console.log(obj); // rue 
console.log(obj.hasOwnProperty('example'));
console.log(obj.toString);
console.log(obj.hasOwnProperty('toString'));


console.log("=================================");
var GrandParent = function() {};

var Parent = function() {};
Parent.prototype = new GrandParent();
Parent.prototype.constructor = Parent;

var Child = function() {};
Child.prototype = new Parent();
Child.prototype.constructor = Child;

console.log("=================================");
var child = new Child();
console.log(Parent.prototype.isPrototypeOf(child));
console.log(GrandParent.prototype.isPrototypeOf(child));

/* 그 와 Object 메소드는 찾아보면서 사용할 것 */