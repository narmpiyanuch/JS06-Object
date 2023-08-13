// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติตัวเอง 2-3 ข้อ
// ระบุความสามารถของตัวเอง 4 ข้อ (cover all syntax)
// key : name-FN
// key : anonymusFN
// key : arrowFN
// key : shothand


const infor = {
    name: 'Piyanuch',
    age: 28,
    height: 168,
    gender: 'female',
    sport: badminton,
    task: function () {
        console.log("I'm multi-task guy.");
    },
    sleep: () => console.log("I can't sleep all day"),
    eat(menu) {
        console.log(`I'm eating ${menu} all day.`)
    }
}

function badminton (type) {
    console.log(`I can play badminton ${type}`)
}

console.log(infor.name);
infor.sport('single');
infor.task();
infor.sleep();
infor.eat();
infor.eat('TAX');