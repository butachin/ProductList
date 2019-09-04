import * as CartActionCreators from './CartActionCreator';
import { ActionType } from 'typesafe-actions';

type CartAction = ActionType<typeof CartActionCreators>;

export default CartAction;
