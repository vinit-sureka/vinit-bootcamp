const person ={
    name :"vinit",
    gender : "male",
    greet()  {
        console.log('hi i am ' + this.name) // if u wnat to use this with refrence to the object we need to write function like this
    }
}

person.greet()