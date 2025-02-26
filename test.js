import index from './index.js';

var firstName = "Yhannis"
var lastName = "Prudencio"
var email = "yoprudencio@up.edu.ph" //initializes the values needed
var age = "20"

var ID = index.generateUniqueID(firstName,lastName); //generates the ID


var arrayData = [firstName,lastName,email,age,ID]; //initializes the array
index.addAccount(...arrayData); //calls the add function and takes the array as the input.