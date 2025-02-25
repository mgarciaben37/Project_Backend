import express from 'express';
//import path from 'path';
import cors from 'cors';
import { resolve } from 'path';
// Controllers (route handlers)
import createDebug from 'debug';
import { BooksController } from './controllers/books.js';
import { BaseController } from './controllers/base.js';
import { errorHandler } from './errors/errorhandler.js';

// Crear Server Express
const app = express();

//declaramos la variable debug que usaremos en el archivo
const debug = createDebug('myapp:app');

//Para llamar a la carpeta Public de estáticos
const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');
app.use(express.static(publicPath));
debug(publicPath);

// Configuración Express
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Primary app routes.

const baseController = new BaseController();
app.get('/', baseController.base);
const booksController = new BooksController();
app.get('/books', booksController.findAll);
app.get('/books/:id', booksController.findById);
// app.delete('/books/:id', booksController.deleteById);
// app.post('/books', booksController.create);

// Rutas expuestas para devolver páginas HTML, como si fuéramos un servidor apache por ejemplo
app.get('/home', baseController.home); // En este caso para la ruta /home se devuelve el código HTML de la página que hace de home.

//Debug para soltar mensajes en el log

debug('App Initialized');

app.use(errorHandler);
export default app;
