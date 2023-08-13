// // learn object

// //{} ใช้แทน object or scope ( {} == stand for object / scope)
// // { record_1, record_2, record_3, ...}
// // each record = <key_name>:<value>
// // <value> any datatype
// // <key_name> Datatype is string


// let user = {
//     firstName: 'Piyanuch',
//     lastName: 'Anektanasuwan',
//     age: 28,
//     isAdmin: true,
//     'like human': true, // ถ้าชื่อจะมี space ต้องใส่ ' ' ให้ด้วย
// };

// //## ACCESS, MODIFY, DELETE

// // Every action NEED <KEY_NAME> 
// // Dot Notation <obj>.<key_name> === <value>
// // ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// // GET,POLL,READ
// console.log(user);
// console.log(user.firstName); // เรียก value ที่เก็บใน user ในส่วนย่อยที่มีชื่อว่า firstName
// console.log(user.firstName === 'Piyanuch'); // ในวงเล็บมีค่าเท่ากัน ดังนั้น console.log จะให้ result = true
// console.log(user.lastName); // โชว์ Anektanasuwan
// console.log(user.age); // โชว์ 28
// console.log(user.isAdmin); // โชว์ true
// console.log(user["like human"]); // โชว์ true
// console.log(user.admin); // undefined


// // MODIFY, UPDATE
// // Syntax : <obj>.<key_name_old> = newValue

// user.firstName = 'Panu';
// user.age = 30;
// user.age += 2;
// user.age++; 
// console.log(user.age); // result age = 33


// // ADD
// // Syntax : <obj>.<key_name_new> = newValue
// user.address = 'bangkok'; // ถ้าไม่มีชื่อ key นี้ จะทำการเพิ่มให้เลย

// // DELETE
// // Syntax : delete <obj>.<key_name>

// delete user.isAdmin;
// console.log(user);

// // NESTED Object

// const employee = {
//     fullName: "John Doe",
//     salary: 500_000,
//     address: {
//         district: 'Phaya Thai',
//         province: 'Bangkok',
//         country: 'Thailand',
//     },
// };

// // ACCESS, MODIFY. DELETE
// console.log(employee.salary); // show : 500000
// console.log(employee.address.province); // show  : Bangkok
// console.log(employee.address.district); // show : Phaya thai
// console.log(employee.address.village); // show : undefined

// employee.address.province = 'Nonthaburian';
// delete employee.address.country;

// // Prevent Crash !!
// // Dot ใช้กับ Object เท่านั้น
// // ห้ามใช้ dot กับ undefined <undefined>.<key> => program จะ error ทันที เอ๋อเลยจ้า
// // วิธีแก้ Optional chaning => <undefined>?.<key>

// console.log(employee.addr); // undefined
// console.log(employee.addr.province); 
// // มันจะหมายถึง undefined.province จะขึ้น error เนื่องจากไม่สามารถหา undefined เจอเพื่อเข้าไปหา province
// console.log(employee.addr?.province); // ? คือข้างหน้า ? เป็น object มั้ยสามารถ dot ต่อได้มั้ย
// console.log(employee.address?.province); // show Bangkok
// console.log(employee.address?.village); 
// // ข้างหน้า ? เป็น object มั้ยสามารถ dot ต่อได้ แต่ไม่มี record นี้ก็จะขึ้น udefined


// 4.CHECK KEY ?

const product = {
    id: 227,
    name: 'Phone',
    price: 50_000,
    // discount: 0.05,
    'is mobile': true,
};

console.log(product.discount); // show undefined

// IN Operator
// Syntax : <key_name_string> in <obj> จะ return BOOLEAN

// 'name' in product // => true,false

console.log('name' in product); // show true
console.log('discount' in product); // show false

// Method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) จะ return BOOLEAN
console.log(product.hasOwnProperty('name')); // show true
console.log(product.hasOwnProperty('discount')); // show false



// 5. Bracket Notation []
// Syntax : <obj>[ "<key_name_string>" ]
//  * 1.ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
//  * 2. ถ้าไม่ใช่ string แต่ก็ต้องเป็นตัวแปรที่เก็บ string หรือเรียกว่า Computed Key
// Access key-value ผ่านชื่อตัวแปรได้
console.log(product.id); // show 227
console.log(product['id']); // show 227

console.log(product['is mobile']); // show true
product['name'] = 'Iphone-15';
console.log(product.name); // show Iphone-15

let aaaa = 'name';
console.log(product[[aaaa]]); 
// show Iphone-15 เพราะว่า product จะไปหา aaaa ซึ่งเก็บ key ที่ชื่อว่า name แล้วเอา value มาโชว์
console.log(product.aaaa); /// === product['aaaa'] === undefined
// show undefined เพราะว่า dot คือ product วิ่งไป key ที่ชื่อ aaaa ซึ่งไม่มีใน product
console.log(product[['name']]); 
// show Iphonr-15
