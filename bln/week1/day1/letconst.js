const name = "vinit"
const gender = "male"
let hasHobbies = true;

hasHobbies = false;

function summarizeuser(userName,hasHobbies){
    return( "name is "+ userName  + "user has hobby " + hasHobbies) 
}

console.log(summarizeuser(name , hasHobbies));