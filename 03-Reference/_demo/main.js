const log = console.log;
log('Learn Ref');


// ## Copied by Value

// PRIMITIVE
let message = 'Hello';

// ** Start COPY
let word = message; //ค่าที่ copy จะอ้างอิงแค่ค่าแรก ถ้าค่าอ้างอิงเปลี่ยนค่าที่ copy ก็จะไม่เปลี่ยนตาม

log(message); // Hello
log(word); // Hello

message = "hi";
log(message); // hi
log(word); // Hello


// ## Copied by Reference

// OBJECT
let user = {
    name: 'John',
};

// ** start COPY
let employee = user;
log(employee.name); // John

// user.name = 'Jane';
log(user.name); // John
employee.name = 'Joe';
log(employee.name); // Joe
log(user.name); // Joe

let a = {};
let b = {}; // two independent objects
alert( a == b ); // false