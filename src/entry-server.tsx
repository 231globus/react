import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { fetchCards } from './store/reducers/cards.reducer';
import App from './App';
import { setupStore } from './store';

export async function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  const store = setupStore();
  await store.dispatch(fetchCards(''));
  const stream = [
    renderToPipeableStream(
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>,
      opts
    ),
    store.getState(),
  ] as const;
  return stream;
}
