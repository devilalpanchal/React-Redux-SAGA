// import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { applyMiddleware, legacy_createStore  } from "redux";
import { reducer } from "./reducer";

import createSagaMiddleWare from'redux-saga'
import { rootSaga } from "./saga";

export const sagaMiddleware=createSagaMiddleWare()

// 01
export const store=legacy_createStore(reducer,applyMiddleware(sagaMiddleware)) 
sagaMiddleware.run(rootSaga)


// fime name
// first file
// to create legacy_createStore
// import { legacy_createStore } from "redux";
// call the leegacy and store in variable
// it needs reducer function go to reducer file


// after allfiel done
// here we need inport createSagaMiddleWare and call this function in sagamiddlware function
// and pass this saga middlewae in middle in store we have to pass this sagamiddlewate in applymiddleware and sagamiddelsaet.run(here pass takeEvery method wala function)