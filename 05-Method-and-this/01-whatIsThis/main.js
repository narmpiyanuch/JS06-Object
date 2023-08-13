let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name);
    }
  };
  
  (user.sayHi)(); // * John
  // เพราะว่าเรียก function ของ sayHi แล้วใน FN มีการเรียก key name อีกที