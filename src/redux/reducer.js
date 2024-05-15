import axios from "axios"
import { actionType } from "./action"
const initialState = {
    count: 0,
    user: null,
    loaditn: false,
}

export const reducer = (state, action) => {
    console.log(action.type)
    // if(action.type==actionType.INC){
    //     return {count:state.count+1}
    // }
    // 02
    // Dispathc hone ke bad action main ayega
    switch (action.type) {
        case actionType.INC:
            return { ...state, count: state.count + 1 }
        case actionType.DEC:
            return { ...state, count: state.count - 1 }
        case 'POST':
            return { ...state, user: action.payload }
        // case "fetch":
        //     async function fetchData() {
        //         let resp = await axios.get(
        //             'url'
        //         )
        //     }
        //     return { ...state, user: state.resp.data }
        // we can't use async function so we can use but use of saga and use of middleware
    } 
    return { count: 0 }
}

// to logic needs state and parameter (action ) returb state
// all logic in conditional statement