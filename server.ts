import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// eslint-disable-next-line
// @ts-ignore
import renderApp from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();
const parts = html.split('<!--ssr-outlet-->');

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

app.use((req, res) => {
  const stream = renderApp(req.url, {
    onShellReady() {
      res.write(parts[0]);
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      res.write(parts[1]);
      res.end();
    },
    onError(err: Error) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);