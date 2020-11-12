// alert("Welcome to Javascript Class!");
// var Sonia = 'beautiful';
// document.write(Sonia)
// console.log(Sonia)

// Else if Statements
// var youLikeMeat = false;
// if(youLikeMeat){
   
//     document.write("Here is the Meat menu");
// }else{
//     document.write("I hate meat");
// }

// var myNum = 20;
// if (myNum != 19){

//     document.write("This number is not equal to 19");
// }else{
//     document.write("myNum equal to 19");
// }

// Else if
// var race = "American";
// if(race == "African"){

//    console.log("I am African");

// }else if(race == "Asian"){
//     console.log("You are Asian");
// }else{
//     console.log("You are niether Asian nor African");
// }
// Logical Operators '&' '||'
// For '&' both conditions have to be met. For '||' only one
// of the conditions need to be met for it to be true
// var myAge = 37;
// if(myAge >= 18 && myAge <= 35){

//     console.log("You are coming, you cool!");
// }else{
//     console.log("You aint coming!");
// }
// var age = 26;
// if(age < 18 || age > 35 || age === 25){
//     console.log("You aint coming!");
// }else{ //only the greater sign can be used here
//     console.log("You can come, you cool!");
// }

// We have logical operators, comparison operators and increament operator

// While Loop
// var num = 12;
// while (num < 15) {

//     console.log("Number is less than 15");
//     num++;

// }
//     console.log("Number is equal to 15");

// var passwordTrial = 3;
// while (passwordTrial < 6){

//     console.log("Password incorrect")
//     passwordTrial++;
// How do I say two trials left, one trial left each time it runs?
// }
//     console.log("You've exceeded number of trials, please wait for 30 minutes and try again")


// For Loop

// for (theAge = 6; theAge < 20; theAge++) {
//     console.log("Age is less than 20");
// }
//     console.log("Age is now equal to 20")

//     alert("Glory to God");

// function thisFunction (name, school, degree) {
//     var details = (name + " " + school + " " + degree);
//     console.log (details);
// }
//     thisFunction ("Sonia", "Unilorin", "Sociology");
//     thisFunction ("Tunde", "Futa", "Sociology");
//     thisFunction ("Mary", "Covenant", "Marketing and Communications");
//     thisFunction ("Alex", "Unilag", "Engineering");

// function numTypes (num) {
//     if (num % 2 == 0){
//         console.log("This is an Even Number");
//     }else{
//         console.log("This is an Odd Number");
//     }
// }
//     numTypes(30);
//     numTypes(21);
//     numTypes(18);
//     numTypes(15);

// function getAverage(a,b){
//     var average = (a + b) / 2;
//     console.log (average);
// }
// getAverage(12,30);

// class Loop
// for Loop
// var arr = [1,3,5,7];
// for (i =0; i< arr .length - 2; i++){
//     console.log(arr[i]);
// }

// for in loop
// var student = {
//     name : "stella",
//     age : 40,
//     address: "3 Lawanson Street",
//     likes: "cooking"
// };

// for (i in student){
//     console.log(i + ": " + student[i]);
// }

function convertToF(celcius){
    var farenheit;
    farenheit = math.round(1.8 * celcius) + 32;
    return(farenheit);
}
convertToF();
function convertToC(farenheit){
    var celcius = math.round(farenheit - 32) * 5/9;
    return(celcius);
}
convertToC();

var convert{
    
}