"use strict";
//datatypes - primitive & reference
Object.defineProperty(exports, "__esModule", { value: true });
//primitive types
//number
//string
//boolean
let a = 10;
let b = a * 2;
console.log(b);
//Arrays 
let arr = [1, 2, 3, 4, 5, "harsh", { name: "sneha" }];
let arr2 = [1, 2, 3, 4, 5];
//Tuples
let arr3 = [23, "vaishnavi"];
//Enums - enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
//if you want to use predifined code then we use enum 
//when you write UserRoles. then you can see all the user roles
//Any,Unknown,Void,Null,Undefined,Never
//Any
let c;
c = 12;
c = "hello";
//give type to variable
let d;
//Unknown
let e;
//Void
function abcd() {
    return 23;
}
//Null
let f = null; //it will make variable type as any
let g; // null type variable
//Undifined
let h;
//Never
//used it infinite loops mainly
//Type Inference 
let i = 10; //this checks and datatype of variable 
//Type Annotation
let j; //data type is decided
function bcd(obj) {
    obj.age;
    obj.name;
}
function cd(obj) {
    obj.age;
    obj.email;
    obj.name;
}
function def(obj) {
    obj.email;
    obj.name;
}
function add(obj) {
}
add("hii");
add(47);
add(null);
function ghf(a) {
    a.email;
    a.name;
    a.getDetails;
}
//generics
//generic function
function log(val) {
    console.log(val);
}
log(12);
log("heyy");
log(22);
function lol(a, b, c) {
}
lol("hii", "hello", 24);
function kill(a) {
}
kill({ name: "hii", age: 54, key: "ghj" });
//generic classes
class Hello {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new Hello("heyy");
let b2 = new Hello(24);
console.log(b1, b2);
//Type Assertion & type casting
let x = 29;
x.toString;
x.toString;
let l = Number("98");
console.log(typeof l);
//# sourceMappingURL=app.js.map