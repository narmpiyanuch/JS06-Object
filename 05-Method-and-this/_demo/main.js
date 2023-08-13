// const log = console.log;

// log('Method and this keyword');

// //  each record => called property
// // each property => <key>:<value>

// // some record => <key>:<FN> 
// // cassled Method คือ ความสามารถของ Object

// // const programmer = {
// //     name: 'Piyanuch',
// //     age: '28',
// //     dev: devWebsit,
// //     meet: meeting,
// //     pre: present,
// // };

// // function devWebsit () {
// //     console.log("I'm working");
// // }

// // function meeting() {
// //     console.log("I'm meeting");
// // }

// // function present () {
// //     console.log("I'm presenting");
// // }

// // // ## Property
// // // Syntax : <obj>.<key>
// // log(programmer.name);
// // log(programmer.age);


// // // ## Method == ความสามารถของ Object
// // // Syntax : <obj>.<method>()
// // programmer.dev(); // เรียกใช้ programmer ไปที่ key = dev และเรียกใช้ method นั้น
// // programmer.meet();
// // programmer.pre();


// // ############################
// // ##### 2. Alternative Syntax
// // ###########################

// // const programmer = {
// //     name: 'John',
// //     age: 30,
// //     dev: function () {
// //         console.log("I'm working"); // Anonymus
// //     },
// //     meet: () => console.log("I'm meeting"), // Arrow
// //     sleep() {
// //         console.log("I'm sleeping"); // method shothand 
// //     }, // key ชื่อ sleep ที่เก็บ FN ไม่มีชื่อ
// // };

// // programmer.dev();
// // programmer.meet();
// // programmer.sleep();



// // #### OOP : Object Oriented Program ####

// // const car = {
// //     brand: 'Tesla',
// //     model: 'X',
// //     speed: 80,
// //     drive: () => console.log('Driveing'),
// //     'auto pilot': () => console.log('Self Driveing'),
// // };
// // console.log(car.brand, car.model);

// // // Called Method
// // car.drive();
// // car['auto pilot']();

// // const calculator = {
// //     sum: (x, y) => x + y,
// //     minus: (x, y) => x - y,
// // };

// // let r1 = calculator.sum(5, 7);
// // let r2 = calculator.minus (7, 3);
// // console.log(r1); // 12
// // console.log(r2); // 4
// // console.log(r1, r2); // 12 4
// // let r3 = calculator.sum(car.speed, 20);
// // console.log(r3); // 100
// // car.speed = calculator.sum(car.speed, 20); // เอาค่าเดิมมาบวกแล้วอัพเดตลงไปใหม่
// // console.log(car.speed); // 100


// // #################################
// // ########## 4. This Keyword
// // #################################

// const user = {
//     name:'codecamp',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld: function () {
//         console.log(this); // this == user, this.age == user.age
//         this.age++;
//     },
// };

// // Question : ทำยังไงให้ method สามารถเข้าถึง property ของตัวเองได้
// // user.sayHi();
// // user.name = 'software park';
// // user.sayHi();
// // user.name = 'Piyanuch';
// // user.sayHi();
// // console.log(user.name);

// // log(user.age); // 15
// // user.growOld();
// // log(user.age); // 16


// // Q : ค่าของ This ถูกตีค่าตั้งแต่ตอนที่เขียน function รึป่าว?
// // A : ไม่จ้า
// function dev() {
//     console.log(`This feature developed by ${this.name}`);
// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// };

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// };

// // A : This ถูก solve ตอนเรียกใช้ Method 
// // Called.Method ซึ่ง this == Caller หรือ Object before the dot
// programmer1.develop(); // This feature developed by John
// programmer2.develop(); // This feature developed by Jane



// Global(Brower) : window object
window.alert("I'm Global");
this.alert("I'm Global this");
alert("I'm exeute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj ซึ่งก็คือ Hosting
function sayHi () {
    console.log(this); // window
}
var a = 'm';

//Execute Context = Window
window.sayHi();
this.sayHi();
sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}
// window caller
sayHello(); // === window.satHello();
// this == window caller

const user = {
    name: 'John',
    say: sayHello,
    scream: () => { // Arrow FN
        console.log(`scream by ${this.name}`)
    },

};

// Arrow ไม่มีความสามารถในการสร้าง Context
// เมื่อ arrow loose context => chain to Window
// user caller
user.say(); // result : John
// this == object caller
user.scream(); // result : scream by Codecamp