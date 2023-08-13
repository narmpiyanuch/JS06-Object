const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); 
  // * email: cc@gmail.com , isActive: false เพราะว่ามีการ update ข้อมูลใหม่
  user = {};
  console.log(user); // ** ให้ผลลัพธ์เหมือนเดิม