import IProduct from "src/apis/ProductList";
import ProductListAction from "src/actions/ProductList/ProductListAction";
import productListActionType from "../../actions/ProductList/ProductListActionType";

const initialState: IProduct[] = [];

export default function productList(state:IProduct[]=initialState, action: ProductListAction):IProduct[] {
    switch(action.type) {
        case productListActionType.PRODUCTLIST_SUCCESS:
        return [...action.payload];
        default:
            return state;
    }
}