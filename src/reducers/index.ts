import { combineReducers } from "redux";
import productList from "./ProductList/ProductList";

const rootReducer = combineReducers({
    productList,
})

export default rootReducer;