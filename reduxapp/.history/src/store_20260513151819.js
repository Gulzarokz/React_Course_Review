import rootReducer from "./reducers/reducer.js";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;