
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi'; // แก้ name
product2.price = 19; // แก้ price

console.log(product1); // *  { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product2); // ** { name: 'Pepsi', price: 19, size: '500mL' }
console.log(product1 === product2); // *** true
// ที่เท่ากันเพราะว่า obj product2 = obj product1 ซึ่งคือ address ที่เท่ากัน ดังนั้นถ้ามีการแก้ไขข้อมูลจะถูกแก้ทั้ง 2 ที่