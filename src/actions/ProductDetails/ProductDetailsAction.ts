import * as ProductDetailsActionCreator from './ProductDetailsActionCreator';
import { ActionType } from 'typesafe-actions';

type ProductDetailsAction = ActionType<typeof ProductDetailsActionCreator>;

export default ProductDetailsAction;
