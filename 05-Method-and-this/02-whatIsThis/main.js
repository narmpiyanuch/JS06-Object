var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // * Joe
// makeUser () ถูกเรียกใน window พอ user.ref มันหมายถึง window แล้ว ดังนั้น เลยได้ Joe