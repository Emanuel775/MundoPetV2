import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Configuración de carpetas de distribución
 */
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

/**
 * Inicialización de Express
 */
const app = express();

/**
 * Servir archivos estáticos desde /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Para cualquier otra ruta, devolver el index.html
 */
app.get('*', (req, res) => {
  res.sendFile(resolve(browserDistFolder, 'index.html'));
});

/**
 * Iniciar el servidor si este módulo es el principal
 */
const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
