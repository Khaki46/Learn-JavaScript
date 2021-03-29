// function countBodyChildren() {
//     let bodyElement = document.getElementsByTagName('body')[0];
//     console.log(bodyElement.childNodes);
//     console.log(bodyElement.childNodes.length);
// }
// window.onload = countBodyChildren;

let book = {
    name:"book",
    _year: 2004,//_ 只等用对象方法访问的属性
    edition: 1
}
Object.defineProperties(book, {
    name: {
        writable: false,
        
    }
})
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (value) {
        if (value > 2004) {
            this.edition += value - this._year;
            this._year = value;
        }
    }
})
book.year = 2005;
console.log(book.edition);
console.log(book.year);
book.name = "test";
console.log(book.name);
console.log(book);

// 原型模式
function Person() {
    
}
Person.prototype.name = "Mike";
Person.prototype.age = 20;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person1 = new Person();
person1.sayName();
let person2 = new Person();
person2.sayName();
console.log(person1.sayName == person2.sayName);

console.log(Person.prototype);
person1.name = "John";
console.log(person1.name);//来自实例
console.log(person2.name);//来自原型
console.log(person1);
console.log(person2);