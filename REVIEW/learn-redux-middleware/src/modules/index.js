import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter_saga, { counterSaga } from "./counter_saga";
import sample_saga, { sampleSaga } from "./sample_saga";
import loading from "./loading";

const rootReducer = combineReducers({
  counter_saga,
  sample_saga,
  loading,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;
