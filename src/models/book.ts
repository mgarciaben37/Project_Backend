export class Book {
    id:number;
    title:string;
    author:string;
    isbn: string;
    year: number;
    pages:number;
    price: number;
    constructor(id:number, title:string, author:string, isbn: string, year: number, pages:number, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year = year;
        this.pages = pages;
        this.price = price;
    }
}