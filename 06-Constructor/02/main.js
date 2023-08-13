// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

let inputNum = +prompt('Enter number');
let startingValue = 5 ;

const Accumulator = {
    currentValue: startingValue,
    inputNum: inputNum,
    resultValue: function (currentValue, inputNum) {
        return this.currentValue += this.inputNum;
        // alert(console.log(this.currentValue));
    },
};

alert(`currentValue is ${Accumulator.resultValue()}`);

