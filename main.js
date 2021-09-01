// writing a function in different ways
// 1
function addition(a, b){
        return  a+ b;
}
// 2
const addition2 = function(a, b){
        return a + b;
}
// 3 arrow function
const addition3 = (a, b) => a + b;

// arrow function single para meter
const welcome = name => "welcome "+name;

// arrow function with body

const greetings = (name, age) => {
        console.log(`hello  ${name} you are ${age} years old`);
}

// ending of functions 

// clouser 
// clouser is basically a behavior and its a by default behavior of js

const clouserFunction = () => {

        let x = 10;
        function insideFunction(){
                let  y = 20;
                return x + y;
        }

        return insideFunction();

}

// console.log(clouserFunction())

// private variable

function something(){
        // the below variable is private
        // becuase its not accibable from the outside
        let x = 10;
}

// creating objects in different ways
// 1st way
const Person = {
        name: "ashik"
}

// 2 
class Human{
        name;
        work(){
                console.log("the work is only study")
        }
}
const humanObj = Object.create(Human);
// or we can do this
const object2 = new Human()

// Now play with objects

const Bike = {
        model: "R15",
        price: 525000,
        props: function(){
                return " its ver speedy bike"
        },
        lastProp: "something"
}
// accessing object keys and values

// accessing the key only
for(const key in Bike){
//        console.log(key)
}
// accessing the value only
for(const value in Bike){
        // console.log(Bike[value])
}

// accessing both keys and values using entires
for(const [key, value] of Object.entries(Bike)){
        // console.log(`${key} : ${ value}` )
}

// delete a property from an object
delete Bike.lastProp;

// object seal

 Object.seal(Bike);

// this property will not be added due to used of object seal. it will prevent to add new element over the object
Bike.newProp = "somethign";

// end of object seal

// Object Freeze
// it is the same of object seal. it prevents to add new elements to teh object

 Object.freeze(Bike);

Bike.newPropsss = "something";

const firstPerson = {
        name: "ashik"
}
const secondPerson = {
        name: "ashik"
}

const thirdPerson = firstPerson;

// it will return true
const comparee = firstPerson === thirdPerson;
// but it will return false
const compare2 = firstPerson === secondPerson;

// call,  apply, bind

// call 
// call simply bind a method with a class. Where we can specify the class and this keyword will be wokred based on the class we will select

const Animal = {
        name: "Biral",
        works: function(){
                let name = "biral";
                console.log('ami  '+ this.name)
        },
        animal2: {
                name: "biral2",
                works: function(ext){
                        console.log("Ami "+this.name+ext)
                }
        }


}

// after applying call method the this context hsa been changed now its working based on the root Object

// Animal.animal2.works.call(Animal, " habi jabi")


// apply method is almost same like call method but it just takes the arguement as array after this value

const Manus1 = {
        name: "Ashikur Rahman",
        fullName: function(){
                return this.name;
        },

        insideManus: {
                name: "Ashik",
                fullName: function(age, dept){
                        return  `My name is ${this.name} and I am ony ${age} years old and my dept is ${dept}`;
                }
        }
}


const outputt = Manus1.insideManus.fullName.apply(Manus1, [24, "CSE"])

// bind method
// bind is like call but it does not call the function instantly. it just returns a function defination and then we can run that function any time

const rootObject = {
        name: "Ashikur Rahman",
        fullName: function(){
                return this.name;
        },

        secondObject: {
                name: "Ashik",
                fullName: function(age){
                        return  `My name is ${this.name} and I am ony ${age}`;
                }
        }
}

const bindMethod = rootObject.secondObject.fullName.bind(rootObject);

// returning the function defination
// console.log(bindMethod)

// returning the acutal outpout of the function
// console.log(bindMethod())

// printing an array
const myArray = [];

for(let i = 1; i < 10; i++){
        let value = i * 2;
        myArray.push(value);
}

// printing an array
for(const p of myArray){
        // console.log(p)
}

// printing an arry using forEach
myArray.forEach(a => {
//        console.log(a)
})
// above function in brief

myArray.forEach(function(a){
        // console.log(a)
})


// Array Map
// The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.

const friendsName = ["Ashik", "Shafiq", "Akash", "rakib"];


friendsName.map(data => {
        // console.log(data)
})

// Array filter

const numbers = [10, 50, 3, 50, 25, 70];

const myNum = numbers.filter(a => {
        return a > 3;
})

// console.log(myNum)

// find method
// find method find exact first data match with the condition from the array

const NameOfFriends = ["ashik", "shafiq", "aksh al mahmud"];

const lovelyFriend =  NameOfFriends.find(a => {
        return a.length == 5;
})

// console.log(lovelyFriend)

// API
// we can get data with two ways 
// using Fetech method of JS
// or using async await

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => myCustomFunction(data));

// extract json array of objects 
function myCustomFunction(data){
        for(singleData of data){
                // console.log(singleData.title)
        }
}


// fetech data using async await

const fetechData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        return data;
}

fetechData().then(data => {
       for(singleData of data){
        //        console.log(singleData.title)
       }
})















