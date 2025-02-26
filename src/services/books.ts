import { Book } from '../models/book.js';
import createDebug from 'debug';
import { BookRepository } from '../repositories/bookrepository.js';

//declaramos la variable debug que usaremos en el archivo
const debug = createDebug('myapp:BookService');

let books: Book[] = [];

// Initialize with dummy data
let id = 0;
books.push(
    new Book(
        ++id,
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);
books.push(
    new Book(
        ++id,
        'A Farewell to Arms',
        'Ernest Hemingway',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);
books.push(
    new Book(
        ++id,
        'The Catcher in the Rye',
        'J.D. Salinger',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);
books.push(
    new Book(
        ++id,
        'To Kill a Mockingbird',
        'Harper Lee',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);
books.push(
    new Book(++id, '1984', 'George Orwell', 'asdahsjhsgdjahtg', 1, 3, 6),
);
books.push(
    new Book(
        ++id,
        'Brave New World',
        'Aldous Huxley',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);
books.push(
    new Book(++id, '1984', 'George Orwell', 'asdahsjhsgdjahtg', 1, 3, 6),
);
books.push(
    new Book(
        ++id,
        'Brave New World',
        'Aldous Huxley',
        'asdahsjhsgdjahtg',
        1,
        3,
        6,
    ),
);

export class BookService {

    bookRepository:BookRepository = new BookRepository();
    constructor() {
        debug('BookService constructor');
    }

    public findAll = async () => {
        debug('Ejecutando FindAll');
        return this.bookRepository.findAll();
        
    };

    public findById = async (id: number) => {
        debug('Encontrando ID');
        return books.find((book) => book.id === id);
    };
}
