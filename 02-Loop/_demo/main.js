const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
};

// For IN : Loop through Object
// For (let <key_variable> in <obj>) {}

for (let key in user) {
    // 1st : let key = 'firstName'
    // 2nd : let key = 'lastName'
    // 3rd : let key = 'age'
    console.log(key); // auto dynamic assign by JS in <string>
    console.log(user[key]); // need to access by bracket, computed key
    // ก็คือตัวแปร key เก็บอะไรไว้ แล้วถึงจะวิ่งไปเอาข้อมูลนั้นออกมา
    // Step การรัน
    // 1st : user[key] == user['firstName'] ==> Codecamp
    // 2nd : user[key] == user['lastName'] ==> Software Park
    // 3rd : user[key] == user['age'] ==> 15 
    console.log(user.key);
    // 1st : user.key == user['key] ==> undefined
    // 2nd : user.key == user['key] ==> undefined
    // 3rd : user.key == user['key] ==> undefined
}