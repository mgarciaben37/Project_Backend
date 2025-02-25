import { createHeader } from './header.js';
import { createHead } from './head.js';
import { createFooter } from './footer.js';

export const renderIndexHtml = () => {
  const title = 'Inicio | Librería La MonaLisa';
  const pageTitle = 'Librería La MonaLisa';

  return `
        <!DOCTYPE html>
        <html lang="es">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}
                <main class="productos">
                      <div class="producto">
                          <img src="/assets/karina-teras-CcTjaPj_tHQ-unsplash.jpg" alt="Portada Libro 1">
                          <h2>Libro 1</h2>
                          <p>Descripción del libro 1.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/andrew-bui-z7rzbFHXym0-unsplash.jpg" alt="Portada Libro 2">
                          <h2>Libro 2</h2>
                          <p>Descripción del libro 2.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/sanjeevan-satheeskumar-MG8c-4n1QVE-unsplash.jpg" alt="Portada Libro 3">
                          <h2>Libro 3</h2>
                          <p>Descripción del libro 3.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/taryn-kaahanui-J5b23iaAHis-unsplash.jpg" alt="Portada Libro 4">
                          <h2>Libro 4</h2>
                          <p>Descripción del libro 4.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/souvik-laha-SBHrS9zs9Lo-unsplash.jpg" alt="Portada Libro 5">
                          <h2>Libro 5</h2>
                          <p>Descripción del libro 5.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/shuttergames-njGrQxgsp5Y-unsplash.jpg" alt="Portada Libro 6">
                          <h2>Libro 6</h2>
                          <p>Descripción del libro 6.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/marek-piwnicki-w4sxddUJ5-0-unsplash.jpg" alt="Portada Libro 7">
                          <h2>Libro 7</h2>
                          <p>Descripción del libro 7.</p>
                      </div>
                      <div class="producto">
                          <img src="/assets/ian-dooley-TevqnfbI0Zc-unsplash.jpg" alt="Portada Libro 8">
                          <h2>Libro 8</h2>
                          <p>Descripción del libro 8.</p>
                      </div>
                      <div class="formulario">
                        <form id="miFormulario">
                            <label for="titulo">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required>
                            <br><br>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required>
                            <br><br>
                            <label for="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" required></textarea>
                            <br><br>
                            <button type="submit">Enviar</button>
                        </form>
                      </div>
                  </main>
                ${createFooter()}
            </body>
        </html>
    `;
};
