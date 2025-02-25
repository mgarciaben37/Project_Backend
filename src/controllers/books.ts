import { Request, Response } from 'express';
import { BookService } from '../services/books.js';
import { HttpError } from '../errors/http-errors.js';
import createDebug from 'debug';

//declaramos la variable debug que usaremos en el archivo
const debug = createDebug('myapp:BooksController');

export class BooksController {
    constructor() {
        debug('booksController constructor');
    }

    bookService: BookService = new BookService();

    public async findAll(req: Request, res: Response) {
        debug('/books invoked');
        const books = this.bookService.findAll();
        res.status(200);
        res.json(books);
    }

    public async findById(req: Request, res: Response) {
        debug('/books/id --> Find');
        const id = parseInt(req.params.id);
        const book = this.bookService.findById(id);
        if (!book) {
            throw new HttpError('Error', 404, 'Not Found');
        } else {
            res.status(200);
            res.json(book);
        }
    }
}
