

import {v1 as uuidv1} from 'uuid';
import validator from 'validator';
import {appendFileSync} from 'node:fs'; //importing required libraries



function generateUniqueID(firstName, lastName){ //function to generate a unique id by concatenating first name, last name, and a UUID value

    var lowerFirst = firstName.toLowerCase();
    var lowerLast  = lastName.toLowerCase(); //turning the names to lower case
    var uuid = uuidv1(); //generating uuid value
    
    var newName = lowerFirst[0] + lowerLast + uuid.substr(0,7);
    //newName variable concatenates the 3 values then returns it
    return newName;
}

function addAccount(firstName,lastName,email,age,uniqueID){ //function to add the values to a text file

    var emailCheck = validator.isEmail(email); //checking email validity

   if (!firstName){ //if statements to check if the names, age, and email are empty.
    console.log("The first name is empty.");
    return false;
   } 
   else if (!lastName){
    console.log("The last name is empty.");
    return false;
   }
   else if (age < 18){
    console.log("Not yet of legal age");
    return false;
   }
   else if(!emailCheck){
    console.log("The email is invalid.");
    return false;
   }


   var data1 = [firstName,lastName,email,age,uniqueID].join(','); //joins the values with a comma
   appendFileSync('users.txt',data1)

   console.log("Appended data") //to inform the user that the data is appended


   return true; //returns true, since successful.
}

export default {generateUniqueID, addAccount} //exports the functions for test.js

