var fruits = ["apple", "orange", "kiwi"];

document.getElementById("display").innerHTML = fruits;

function addfruit(){

var newfruit= prompt("Please add a fruit to the list",);

fruits.push(newfruit);

fruits.sort();

return document.getElementById("display").innerHTML = fruits.join(" with ")

console.log("newfruit")

}