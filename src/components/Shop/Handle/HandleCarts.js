import { itemStorage } from "../../Home/Storage";

const handleStorageItem = (id) =>{
    const items = itemStorage();
    if(items[id]){
        items[id] = items[id] + 1
    }else{
        items[id] = 1;
    }
    localStorage.setItem("shopping-carts", JSON.stringify(items))
}


export { handleStorageItem };

