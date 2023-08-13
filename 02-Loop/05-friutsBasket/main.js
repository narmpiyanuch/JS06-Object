// IN-IT
const TERMINATE = 'stop';
const fruit = {};

let key;
let value;

do {
    // ACCEPT INPUT
    key = prompt('Enter friutsName');
    value = +prompt('Enter Quantity');

    if (+value === 1) {
        fruit[key] = value; // {apple : 10}
    } else if (+value > 1) {
        fruit[`${key}s`] = value;
    }
} while (key != TERMINATE && value != TERMINATE);

console.log(fruit);

//UPDATE FRUITS
// fruit.key = value; // {key : 10}
// fruit['apple'] = value; // {apple : 10}
// if (value === 1){
//     fruit[key] = value; // {apple : 10}
// } else if (value > 1) {
//     fruit[`${key}s`] = value;
// }

// console.log(fruit);