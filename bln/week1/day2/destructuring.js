//object destructuirng


const person = {
    name :'vinit',
    gender : 'male'
}

const printName =({name})=> console.log(name)

printName(person)

const {name , gender} =person
console.log(name , gender)


//array destruing

const arr =[1,2,3,4]
const [num1,num2]= arr

console.log(num1,num2)

//in arrya we can use any name we want but in object we need to give matching name of the object property