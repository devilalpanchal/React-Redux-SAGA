export const actionType={
INC:'INC',
DEC:'DEC',
// to find  error we have to use INC:"INC"
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


// create a object of a ation type variable and functin for dispatch the function
