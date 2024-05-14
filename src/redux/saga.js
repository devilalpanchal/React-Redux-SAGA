import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"



function* fetchData(){
let resp=yield axios.get('https://dummyjson.com/products')

yield put({type:'POST',payload:resp.data})

}

export function* rootSaga(){
yield takeEvery('FETCH_DATA',fetchData)
}