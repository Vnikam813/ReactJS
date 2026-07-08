//datatypes - primitive & reference

//primitive types

//number
//string
//boolean

let a = 10;
let b=a*2;
console.log(b);

//Arrays 
let arr=[1,2,3,4,5,"harsh",{name:"sneha"}];
let arr2: number[]=[1,2,3,4,5];

//Tuples
let arr3:[number,string] =[23,"vaishnavi"];

//Enums - enumerations
enum UserRoles{
    ADMIN="admin",
    GUEST="guest"
}
//if you want to use predifined code then we use enum 
//when you write UserRoles. then you can see all the user roles

//Any,Unknown,Void,Null,Undefined,Never

//Any
let c;
c=12;
c="hello";

//give type to variable
let d:number;

//Unknown
let e:unknown;

//Void
function abcd():number{
    return 23;
}

//Null
let f=null; //it will make variable type as any

let g:null; // null type variable

//Undifined
let h:undefined;

//Never
//used it infinite loops mainly


//Type Inference 
let i=10; //this checks and datatype of variable 

//Type Annotation
let j:number; //data type is decided

//interfaces and type Aliases

interface User{
    name:string,
    age:number
}
interface Admin extends User{
    email:string
}
function bcd(obj:User){
    obj.age;
    obj.name;
}
function cd(obj:Admin){
    obj.age
    obj.email
    obj.name
}

interface hii{
    name:string
}
interface hii{
    email:string
}
function def(obj:hii){
    obj.email
    obj.name
}

//Type Aliaces

type value=string|number|null;
function add(obj:value){

}
add("hii");
add(47);
add(null);

//intersection types

type Use ={
    name:string;
    email:string
}
type addd =Use &{
    getDetails(Use:string): void
}
function ghf(a:addd){
    a.email;
    a.name;
    a.getDetails;
}