/*
 * @Author: Bean.Ding
 * @Date: 2020-07-02 19:11:18
 * @LastEditTime: 2020-07-04 09:05:21
 * @LastEditors: Bean.Ding
 */ 
// function Book(title, pages, isbn) {
//     this.title = title;
//     this.pages = pages;
//     this.isbn = isbn;
// };

// Book.prototype.printTitle = function () {
//     console.log(this.title);
// };


// 转换成class
// class Book {
//     constructor(title, pages, isbn) {
//         this.title = title;
//         this.pages = pages;
//         this.isbn = isbn;
//     }
//     printTitle() {
//         console.log(this.title);
//     }
// }

// 调用
let book = new Book('title', 'pages', 'isbn');
console.log(book.title);
book.title = 'new title';
console.log(book.title);

class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }
    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('学习JS算法', '200', '1234567890', 'JavaScript');
console.log(jsBook.title);
console.log(jsBook.printTechnology());

export const circleArea = r => 3.14 * (r ** 2);
export const squareArea = s => s * s;

