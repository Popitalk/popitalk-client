import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import {
  modalReducer,
  apiReducer,
  wsReducer,
  userReducer,
  userPageReducer,
  userSearchReducer,
  inviteReducer,
  generalReducer
} from "./reducers";
import { localstorageMiddleware, websocketMiddleware } from "./middleware";

// abc

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    modalState: modalReducer,
    apiState: apiReducer,
    wsState: wsReducer,
    userState: userReducer,
    userPageState: userPageReducer,
    userSearchState: userSearchReducer,
    inviteState: inviteReducer,
    generalState: generalReducer
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const middleware =
  process.env.NODE_ENV !== "production"
    ? [
        require("redux-immutable-state-invariant").default(),
        thunk,
        localstorageMiddleware(),
        websocketMiddleware("ws://localhost:4000/"),
        routerMiddleware(history)
      ]
    : [
        thunk,
        localstorageMiddleware(),
        websocketMiddleware(
          `wss://${window.location.hostname}:${window.location.port}/ws/`
        ),
        routerMiddleware(history)
      ];

const store = createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
