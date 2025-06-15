const name = "vinit"
const gender = "male"
let hasHobbies = true;

hasHobbies = false;

const summarizeuser = (userName,hasHobbies) => {
    return( "name is "+ userName  + "user has hobby " + hasHobbies) 
}
console.log(summarizeuser(name , hasHobbies));


const add = (a,b) => {
    return a + b ;
}
console.log(add(1 ,2))

const add1 =(a,b) => a+b
console.log(add1(3,4))

const add2 = a => a+1 //if has only one arrgumnet there is no need to use ()
console.log(add2(1))

const add3 = () => 1+2
console.log(add3())