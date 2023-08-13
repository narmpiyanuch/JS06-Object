let username = prompt('Enter Username');
let email = prompt('Enter email');
let password = +prompt('Enter password');


let User = {
    username: username,
    email: email,
    password: password,
};
console.log(User);

// property shothand
// ชื่อตัวแปรที่เก็บ value เหมือนกันกับชื่อ key
// สามารถเขียนได้ใหม่แบบนี้

// let User = { username, email, password};
// console.log(User);