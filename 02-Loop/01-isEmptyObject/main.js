
// Object เป็น input แล้ว return BOOLEAN
function isEmptyObj (obj) {
    let isEmpty = true;

    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

console.log(isEmptyObj({})); // result : true
console.log(isEmptyObj({age:12})); // result : false
