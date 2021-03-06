import { createStore, combineReducers, applyMiddleware } from "redux";
import bucket from "./modules/bucket";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhencer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ bucket });

const store = createStore(rootReducer, enhencer);

export default store;
