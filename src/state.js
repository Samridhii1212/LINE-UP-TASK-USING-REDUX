import rootreducer from "./reducers/rootreducer"
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const store = () => legacy_createStore(rootreducer,{},applyMiddleware(thunk));
export default store;