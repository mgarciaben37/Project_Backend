import {connection} from './db.js'
import { Connection } from 'mysql2/promise';
import {Book} from '../models/book.js'; 
import createDebug from 'debug';

const debug = createDebug('myapp:bookRepository');


export class BookRepository {
    connection: Connection;
    constructor() {
        this.connection = connection;
    }

    public async findAll(){
        const query ='SELECT * FROM books';
        const [rows] = await connection.query<any[]>(query);
        debug('Estructura de la tabla books: ', rows);
        return rows;
    }
}