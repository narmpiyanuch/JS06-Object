// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

let key;
let value;
const STOPPER = 'stop';
const mindObj = {};

do {
    key = prompt('Enter name');
    value = +prompt('Enter number');
    if (key != STOPPER) {
        mindObj[key] = value;
        
    } else false;

} while (key != STOPPER && value != STOPPER);

console.log(mindObj);