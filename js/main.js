//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_names = ["Max","HAS","PuRple","dog"]
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"


function findWords(){
    for(let i = 0; i < dog_names.length; i++) {
        console.log(dog_names[i])
        if(dog_string.includes(dog_names[i])) {
            return "matched";
        }
        else{
            return "no";
        }
    }
}
console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    //code goes here
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 == 0){
            arr1.splice(i,1, "even")
        }
    }
    return arr1
}
console.log(replaceEvens())
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CODEWARS

// 1

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let mybmi = weight / (height**2)
    if(mybmi <= 18.5){
      return "Underweight"
    }
    else if(mybmi <= 25.0){
      return "Normal"
    }
    else if(mybmi <= 30.0){
      return "Overweight"
    }
    else {
      return "Obese"
}}

// 2

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

function checkForFactor (base, factor) {
    // code here
    if(base % factor == 0){
      return true
    } else{
      return false
    }
  }