import createSagaMiddleware from 'redux-saga';
import { Middleware } from 'redux';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducer, middlewares, persistConfig);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
