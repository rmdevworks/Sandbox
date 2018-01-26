// --------------------------------------
// Practice JavaScript Coding.

// Example Function Below
// This function will return the sum of 2 numbers
function numberAdder(a, b) {
    return a + b;
}

console.log(numberAdder(3, 4));
console.log('---- CODE RESULT IS ABOVE:');
// ES6 Version of the above function
// numberAdder2(a, b) return a + b;
// numberFunc(a, b) => {
//     return a + b;
// }

// --------------------------------------
// Simple Objects
var bicycle = {
    wheels: 2,
    handlebar: 1,
    seatType: 'Leather',
    fullBike: function() {
        return 'I have a bike with ' + this.wheels + ' wheels';
    }
};
console.log(bicycle);
console.log('------------------------------');
// Function Person Object
function Person() {
    this.head = 1;
    this.arms = 2;
    this.legs = 2;
    this.fullBody = this.head + ' ' + this.arms + ' ' + this.legs;

    return this.fullBody;
}
var drake = new Person();
console.log('Drake has ' + drake.arms + ' arms.');
console.log(drake.fullBody);
console.log('------------------------------');
var spokenWords = bicycle.fullBike();
console.log(spokenWords);
console.log('------------------------------');
// --------------------------------------
var favoriteFruit = 'Apple'; // This is a string.
var food = ['Pizza', 'Pear', 'Hotdog', 'MilkShake']; //  This is an array.
console.log(food);

food.forEach(function(item) {
    console.log('I like to eat = ' + item);
});
console.log('------------------------------');
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
// --------------------------------------
