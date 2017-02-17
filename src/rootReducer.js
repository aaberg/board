import { combineReducers } from 'redux';
import draggableReducer from './reducers/draggableReducer';

export default combineReducers({
  c: draggableReducer
});
