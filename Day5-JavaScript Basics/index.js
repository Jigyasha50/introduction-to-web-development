//javascript variable

const fullname = " Jigyasha Shrestha ";
let address = "Nhyokha, Kathmandu";
const bloodGroup = "A+";

console.log("Full Name:", fullname);
console.log("Address:", address);
console.log("Bloodgroup:", bloodGroup);

// datatypes
let name = "Jigyasha";
let age = 19; //number
let isStudent = true; //boolean
let hobbies = ["Dancing", "Reading", "Traveling"]; //array
console.log(hobbies[0]);

//object
let user = {
  name: "Jigyasha",
  age: 19,
  isStudent: true,
  hobbies: ["Dancing", "Reading", "Traveling"],
};

console.log(user["name"]); //alternate
console.log(user.name); //mostly used

//function
function greet(name) {
  console.log("WELCOME", name);
}
greet("Jigyasha");

//DOM manipulation
const headingElement = document.getElementById("heading-2");
console.log("heading elemnet bu id", headingElementById);

const headingElementQuery = document.getElementById("heading-2");
console.log("heading elemnet by query", headingElementById);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";
headingElementBtQuery.style.fontsize = "24px";

const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", function () {
  alert("Button clicked");
  console.log("Button clicked");
});
