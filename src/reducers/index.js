import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EntryFormReducer from './EntryFormReducer';
import EntryReducer from './EntryReducer';
//import SearchReducer from './SearchReducer';
import PasswordReducer from './PasswordReducer';
//import TestReducer from './TestReducer';

export default combineReducers({
  auth: AuthReducer,
  entryForm: EntryFormReducer,
  employees: EntryReducer,
  //searching: SearchReducer,
  pw: PasswordReducer
  //test: TestReducer
  //search: searchReducer
});
