import * as ActionCreators from "./ProductListActionCreator"
import { ActionType } from "typesafe-actions";

type ProductListAction = ActionType<typeof ActionCreators>;

export default ProductListAction;

