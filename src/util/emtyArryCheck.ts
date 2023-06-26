export let isEmty=(array:any)=>{
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
       return false
    }else{
        return true
    }
}