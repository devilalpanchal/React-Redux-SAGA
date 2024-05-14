export const actionType={
INC:'INC',
DEC:'DEC',
increseByone:function(){
    return{
        type:this.INC
    }

},
decreaseByOne:function(){
    return{
        type:this.DEC
    }
}
}

