import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
function* fetchData() {
    let resp = yield axios.get('https://dummyjson.com/products')
    yield put({ type: 'POST', payload: resp.data })
}
export function* rootSaga() {
    yield takeEvery('FETCH_DATA', fetchData)
}

// saga is helping liberay to execute aysnc functinality and we have toa handle promices and then it works as a middleware for rideux
//  here we have to write generator function to fetch to hadle promices and with use of put method  dispatch a type and send data as a in payload
//  we need another generator function going to use takeEvery method to dispatch a type and fetch function

// liberay name
// Redux
// react-Redux
// react-saga