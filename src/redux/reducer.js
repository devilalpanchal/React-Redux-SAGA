import { actionType } from "./action"

const initialState={
    count:0,
    user:null
}

export const reducer=(state,action)=>{

console.log(action.type)
// if(action.type==actionType.INC){
//     return {count:state.count+1}
// }
switch(action.type){
    case actionType.INC:
        return {...state,count:state.count+1}
    case actionType.DEC:
        return {...state,count:state.count-1} 
    case 'POST':
        return {...state,user:action.payload}
}

return {count:0}

    
}