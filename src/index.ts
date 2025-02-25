import app from './app.js';
import createDebug from 'debug';

//declaramos la variable debug que usaremos en el archivo
const debug = createDebug('myapp:server');

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  debug(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  //
  debug('  Press CTRL-C to stop\n');
});



export default server;
