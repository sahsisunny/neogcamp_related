const obj1 = {
     name: "Ram",
     power: 2500,
     yuga: "Treta"
}
const obj2 = {
     name: "Krishna",
     power: 2325,
     yuga: "Dwapar"
}

function fun1(o1, o2) {
     if (o1.power > o2.power)
          return (`Name: ${o1.name}, Power: ${o1.power}`);
     return (`Name: ${o2.name}, Power: ${o2.power}`);
}

console.log(fun1(obj1, obj2));