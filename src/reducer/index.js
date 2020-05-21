import * as actions from '../actions/type'
import {combineReducers} from 'redux'

const INIT_STATE = {
  list: [],
  detail: {},
  page: 1
}

const mainReducer = (state = INIT_STATE , action) => {
  switch(action.type){
    case actions.GETDETAIL:
      return{...state, list: action.payload};
    case actions.GETDETAIL:
      return{...state, detail: action.payload};
    case actions.GETPAGE:
      return{...state, page: action.payload}
    default:
      return state;
  }
}

const RootReducer = combineReducers({
  reducer: mainReducer
})

export default RootReducer;