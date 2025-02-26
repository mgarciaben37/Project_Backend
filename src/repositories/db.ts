import * as mysql from 'mysql2/promise';
import { Connection } from 'mysql2/promise';
import createDebug from 'debug';

const debug = createDebug('myapp:db');

export let connection: Connection;

export const connect = async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: process.env.DBUSER,
        password: process.env.DBPWD,
        database: 'books',
    });
};
