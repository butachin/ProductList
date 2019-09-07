import * as PurchasedProductsActionCreators from './PurchasedProductsActionCreator';
import { ActionType } from 'typesafe-actions';

type PurchasedProductsAction = ActionType<typeof PurchasedProductsActionCreators>;

export default PurchasedProductsAction;
