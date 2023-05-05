const obj1 = {
     name: "Ram",
     age: 25,
     yuga: "Treta"
}
const obj2 = {
     name: "Krishna",
     age: 31,
     yuga: "Dwapar"
}

function fun1(o1, o2) {
     if (o1.age > o2.age)
          return (`Name: ${o1.name}, Age: ${o1.age}`);
     return (`Name: ${o2.name}, Age: ${o2.age}`);
}

console.log(fun1(obj1, obj2));