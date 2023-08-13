let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

const multiplyNumeric = (object, num) => {

    for(let key in object) {
        // console.log(key);
        let value = object[key];
        if (typeof value === 'number') {
            object[key] = object[key] * num
            // object[key] = value * num
            // menu['width'] = 200 * 3
            // menu['height'] = 300 * 3
        }
        // console.log(value);
        // console.log(num);
    }
};

multiplyNumeric(menu, 3);
console.log(menu);


// let menuObj ={
//     width: 200,
// };

// menuObj.width = menuObj.width * 2;
// menuObj['width'] = menuObj['width'] * 2;

// //ในแต่ละรอบของ Loop for in
// let key = 'width';
// menuObj[key] = menuObj['width'] * 2;