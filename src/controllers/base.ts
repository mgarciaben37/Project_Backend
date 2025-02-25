import { Request, Response } from 'express';
import { renderIndexHtml } from '../views/index.js';
import createDebug from 'debug';

//declaramos la variable debug que usaremos en el archivo
const debug = createDebug('myapp:BaseController');

export class BaseController {
    constructor() {
        debug('BaseController constructor');
    }

    public async base(req: Request, res: Response) {
        debug('/ invoked');
        res.send('Hola mundo!');
    }

    // Rutas que devuelven HTML - La idea es que se devuelva un HTML
    // export async function home(req: Request, res: Response) {
    //   console.log('/home invoked');
    //   res.setHeader('Content-Type', 'text/html'); // Esto es para que el navegador sepa que le estamos enviando un HTML
    //   res.send('<h1>Home</h1>'); // Esto es lo que se envía al navegador
    // }

    public async home(req: Request, res: Response) {
        debug('/home invoked');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.send(renderIndexHtml());
    }

    // export const getIndexController = (_req: Request, res: Response) => {
    //   const debug = createDebug('demo:getController');
    //   debug('Petición recibida');
    //   res.setHeader('Content-Type', 'text/html; charset=utf-8');
    //   res.send(renderIndexHtml());
    // };
}
