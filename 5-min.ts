function greeter(name) {
  return "Hello " + name;
}

let user = "jane";

let a: Array<number> = [1,2,3];
console.log(greeter(a));

//============ tutorial2 interface ==========
interface Name {
  firstName: string,
  middleName?: string,
  [propName: string]: any, // method 2: using any to avoid error around "sname"
};

const greet = (name: Name) => {
  console.log("hello" + name.firstName + name.middleName);
}

// method 1: using "as Name" to avoid error around "sname"
// greet({firstName: 'chen', sname: 'lin'} as Name);
greet({firstName: 'chen', sname: 'lin'});

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// 共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}
