import { combineReducers } from 'redux';
import { csvParserManager } from './csvparser_reducer.js';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  csvParserManager,
  form: formReducer,
});

export {rootReducer};
