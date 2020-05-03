import { createStore } from "redux";
import reducer from "./reducers";

const Store = createStore(reducer);
console.log(Store.getState());

export default Store;
