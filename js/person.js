let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
//   rabbit.prototype = animal; // (*)
Object.setPrototypeOf(rabbit, animal);//代替rabbit.__proto__ = animal;

  // 现在这两个属性我们都能在 rabbit 中找到：
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); // true

// 水仙数
let number = 100;
let narcissisticNumber = 0;
while (number <= 999) {
  narcissisticNumber = Math.pow(+number.toString().split("")[0], 3) + Math.pow(+number.toString().split("")[1], 3) + Math.pow(+number.toString().split("")[2], 3)
  if (narcissisticNumber == number) {
    console.log(number);
  }
  number++;
}

// 数字对象
let value = "5";
let num = Number(value);
console.log(num);
console.log(typeof num);
let objNum = new Number(value);
console.log(objNum instanceof Number);
console.log(typeof objNum);

// 一到十随机数
console.log(Math.floor(Math.random() * 10 + 1));
// 范围随机数
function selectForm(min, max) {
  let choices = max - min + 1;
  return Math.floor(Math.random() * choices + min);
}