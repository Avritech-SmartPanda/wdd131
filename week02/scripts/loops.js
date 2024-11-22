myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);


const favFoodElement = document.querySelector("#favorite-foods");

function getFavoriteFood() {
    myInfo.favoriteFoods.forEach((food) => {
        let foodItem = document.createElement("li");
        foodItem.textContent = food;
        favFoodElement.appendChild(foodItem);
    });
}
// getFavoriteFood();


function mapFavoriteFood() {
    let favoriteFoods = myInfo.favoriteFoods.map((food) => {
        return `<li>${food} - mapped </li>`;
    });
    favFoodElement.innerHTML = favoriteFoods.join("");
}
// mapFavoriteFood();



// Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
function createFoodItem(food) {
    return `<li>${food}</li>`;
}

// Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
function createPlaceItem(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
function createListItems(list, template) {
    return list.map((item) => template(item)).join("");
}

// Call the function above once for the placesLived list and again for the favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call.
const placesLivedElement = document.querySelector("#places-lived");
placesLivedElement.innerHTML = createListItems(myInfo.placesLived, createPlaceItem);
favFoodElement.innerHTML = createListItems(myInfo.favoriteFoods, createFoodItem);

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Repeat the previous programming snippet by using a while loop.
let x = 0;
while (x < studentReport.length) {
    if (studentReport[x] < LIMIT) {
        console.log(studentReport[x]);
    }
    x++;
}
// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach((studentMark) => {
    if (studentMark < LIMIT) {
        console.log(studentMark);
    }
});
// Repeat the previous programming snippet by using a for...in loop.
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}
// Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
let currentDay = today.getDay();
for (let i = 0; i < DAYS; i++) {
    console.log(daysOfWeek[(currentDay + i) % 7]);
}