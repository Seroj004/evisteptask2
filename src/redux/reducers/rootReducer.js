import {combineReducers} from "redux";
import crownReducer from "./crownReducer";



const rootReducer = combineReducers({
    crownStore: crownReducer,



})

export default rootReducer;