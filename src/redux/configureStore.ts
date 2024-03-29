import { createStore, applyMiddleware, compose } from "redux"; // createStore is the function called to create a redux store, applyMiddleware is an optional function used to add redux middleware enhancers
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"; // this middleware will warn when you accidentally mutate state in the redux store
import thunk from "redux-thunk"; // this middleware helps handle async calls in redux

// interface IinitialState {
//   recipes?: undefined;
// }

export default function configureStore() {
  const composeEnhancers = compose; // add support for redux dev tools
  // createStore accepts 2 default arguments when initialised - the rootReducer and an initialState data passed into the rootReducer
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
