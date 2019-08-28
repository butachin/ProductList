import * as ProductListActionCreators from './ProductListActionCreator';
import { ActionType } from 'typesafe-actions';

type ProductListAction = ActionType<typeof ProductListActionCreators>;

export default ProductListAction;
