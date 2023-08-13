// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program-1 : Input
let productName = prompt('Enter product name');
let productQty = +prompt('Enter product QTY');
let pricePerUnit = +prompt('Enter price');
let discount = +prompt('Enter discount percent');


// Sub Program-2 : CreateObject
const infor = {
    productName: productName,
    productQty: productQty,
    pricePerUnit: pricePerUnit,
    discount: discount,
// ถ้าส่วนลดเป็น 0 ไม่ต้องมี key discount ให้เขียนแบบนี้
//  if (discount != 0) {
//     infor['discount'] = discount;
// }
    // เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ syntax (property shothand)
    // const infor = {productName, productQty, pricePerUnit, discount}
};

// Sub Program-3 : Calculate Price
// discount 10%, paid 90%
// discount 0.1, paid 0.9
// design : price,qty,discount => totalprice
// function totalPrice(pricePerUnit, productQty, discount = 0) {
//     let totalresult = pricePerUnit * productQty * (1 - discount);
//     //  100 * 10 * (1-0.1) => 1000(0.9) => 900
//     return totalresult;
// };
// let result = totalPrice(infor.pricePerUnit, infor.productQty, infor.discount);
// console.log(result);

function totalPrice(inforObj) {
    let pricePerUnit = inforObj.pricePerUnit;
    let productQty = inforObj.productQty;
    let discount = inforObj.discount ? inforObj.discount : 0;
    return pricePerUnit * productQty * (1 - discount);
}

let result = totalPrice(infor);
console.log(infor);
console.log(result);

