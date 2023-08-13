// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง



let x = +prompt('Enter num1');
let y = +prompt('Enter num2');

const read = {
    x: x,
    y: y,
    sum: function (x, y) {return a = this.x + this.y;},
    mul: function (x, y) {return b = this.x * this.y;},
}

console.log(`sum : ${read.sum()}`);
console.log(`mul : ${read.mul()}`);


