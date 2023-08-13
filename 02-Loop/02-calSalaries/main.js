let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Nam: 300,
  };

function isEmptyObj(obj) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

// (OBJ) => NUMBER
function calSalaries (object) {
    // 1. Validate
    if (isEmptyObj(object)) return 0;
    // calSalaries({}) result จะได้ 0

    // 2. calc
    let sum = 0;
    for (let key in object) {
        // <obj>.<key>
        // <obj>[key]
        // console.log(object[key]);
        sum += object[key];
    }
    return sum;
}

let total = calSalaries(salaries);
console.log(total);