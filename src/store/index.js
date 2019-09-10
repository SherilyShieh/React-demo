import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { counterReducer } from "./counter.redux";
// 中间件加载顺序按照参数的先后顺序
// 模块化combineReducers
const store = createStore(combineReducers({counter: counterReducer}),
  applyMiddleware(logger, thunk));

export default store;