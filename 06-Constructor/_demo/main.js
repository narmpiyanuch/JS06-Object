const log = console.log;

log('Constructor Function');

const dev1 = {
    name: 'John',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function () {
        console.log("I'm develop some fratures");
    },
}

// ### Object Creators == Constructor Function
// ชื่อฟังก์ชันขึ้นต้นด้วย ตัวใหญ่

function Developer (name, age) {
    // [1] Implicit create : สร้าง this = {} , คือสร้าง object ใหม่เปล่าๆ

    this.name = name; // {name: 'Piyanuch'}
    this.age = age; // {name: 'Piyanuch', age: 25}
    this.role ='dev'; // {name: 'Piyanuch', age: 25, role = 'dev'}
    this.salary = 40_000; // {name: 'Piyanuch', age: 25, role = 'dev' , salary = 40_000}
    this.dev = function () {
        console.log(`${this.name} develop some fratures`);
    }; // {name: 'Piyanuch', age: 25, role = 'dev' , salary = 40_000, dev: fn()}

    // [2] Implicit Return this
    // return {name:....., dev : fn()}
}

// this == dev2
// [3] this  === Instance
const dev2 = new Developer('Piyanuch', 25);
console.log(dev2);
dev2.dev();

const dev3 = new Developer('Panu', 30);
console.log(dev3);
dev3.dev();

