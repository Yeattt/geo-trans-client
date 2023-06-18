import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';

import { store } from './store';

export default function App() {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
}