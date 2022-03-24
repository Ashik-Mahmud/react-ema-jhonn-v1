const getValueFromStorage = () =>{
    const items = localStorage.getItem("shopping-carts");
    let storageItem = {};
    if(items){
        storageItem = JSON.parse(items)
    }
    return storageItem;
}

export { getValueFromStorage as itemStorage };

