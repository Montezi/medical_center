import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { userReducer } from './ducks/user.ducks';

const rootReducer = combineReducers({
  userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [ 'initial' ],
  blacklist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };
