import { StateType } from "typesafe-actions";
import rootReducer from "src/reducers";

type rootState = StateType<typeof rootReducer>

export default rootState;