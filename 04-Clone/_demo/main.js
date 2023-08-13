const log = console.log;

log('Object Clone');

const todo = {
    task: 'Do Hw',
    complete: false,
    due_date: '13-08-2023',
};

// // ## 1.Clone
// const newTodo = {}

// // 1.เอาต้นแบบมา loop แล้ว assign ที่ละ key:value ให้ object ใหม่
// for (let key in todo) {
//     // assign ที่ละ key:value ให้ newTodo
//     newTodo[key] = todo[key];
//     // newTodo['task'] = todo['task'] => 'Do Hw'
//     // newTodo['complete'] = todo['complete'] => false
//     // newTodo['due_date'] = todo['due_date'] => '13-08-2023'
// }
// log(newTodo); // {task : 'Do Hw', complete: false, due_date: '13-08-2023'}
// newTodo.complete = true;
// log(newTodo.complete); // true
// log(todo.complete); // false

// 2. Object.assign (dst, [src1, src2, ..... , srcN])
// Merge/OVERRIDE Direction : จะ eval from Right to Left
// return address ของ destination (param1)

// // 2A
// const newTodo = {}
// Object.assign(newTodo,todo);

// // 2B
// const newTodo = Object.assign({}, todo);
// log(newTodo);
