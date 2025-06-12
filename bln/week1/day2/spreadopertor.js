const arr =[1,2,3,4]

const arr1 = arr.slice()
console.log(arr1)

//nested array
const arr2 = [arr]
console.log(arr2)

//spread opertaor
const arr3 = [...arr]
console.log(arr3)


const person = {
    name :"vinit",
    gender : "male"
}

const person1 = {person}
console.log(person1)

const person2 = {...person}
console.log(person2)

const sum = (...number) => number.reduce((one ,two) => one +two ,0)
console.log(sum(1,2,3,4,5,6))