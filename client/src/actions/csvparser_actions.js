import * as contentAPIutil from '../utils/contentAPI.js';
import * as Sentry from '@sentry/browser';


export const SEARCH_LIST_SET = 'SEARCH_LIST_SET'
export const SEARCH_LIST_CHANGE_SORT_ASCDESC = 'SEARCH_LIST_CHANGE_SORT_ASCDESC';
export const SELECTED_FILE_CHANGE = 'SELECTED_FILE_CHANGE';
export const UPDATE_IS_FILE_LOADED = 'UPDATE_IS_FILE_LOADED';
export const USER_DETAILS_MODAL_SET_CLOSED = 'USER_DETAILS_MODAL_SET_CLOSED';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';


Sentry.init({
 dsn: "https://e354b6be442b42c88284daa1a60017cf@sentry.io/1361010"
});


export function newCsvSubmitForImport(csvFile){
  console.log('newCsvSubmitForImport got called');
  const request = contentAPIutil.uploadCsvFile(csvFile);
  return (dispatch) => {
    request.then(function(result) {
      dispatch({type: 'SEARCH_LIST_SET', csvFile: csvFile })
    });
  }
}
export function searchListChangeSort_AscDesc ( sortDirection ) {
  console.log('searchListChangeSort_AscDesc got called');
  return {
    type: SEARCH_LIST_CHANGE_SORT_ASCDESC,
    sortDirection,
  }
};
export function setUserDetailsModalClosed ( event ) {
  console.log('setUserDetailsModalClosed got called');
  return {
    type: USER_DETAILS_MODAL_SET_CLOSED,
  }
};

export function searchUserList ( query ) {
  try{
	  console.log('searchUserList got called with query:', query);
	  const request = contentAPIutil.getSearchResults(query);
	  console.log('Our request is', request);
	  return (dispatch) => {
		request.then(function(result) {
		  if(result == null){
			let emptyUserList = {}
			dispatch({type: 'SEARCH_LIST_SET', payload: emptyUserList })
		  } else {
			dispatch({type: 'SEARCH_LIST_SET', payload: result })
		  }
		});
	  }
  } catch (e) {
	  let myErrorE = e;
	  myErrorE.position = 'searchUserList';
	  console.log('We have an error in searchUserList:', myErrorE);
	  Sentry.captureException(myErrorE);
  }
};

export function handleChangeSelectedFile( selectedFile){
  console.log('handleChangeSelectedFile got called');
};

export function clearError(){
  console.log('clearError got called');
  return {
    type: CLEAR_ERROR,
  }
};

export function setError( error ){
  console.log('setError got called', error);
  return {
    type: SET_ERROR,
	error, 
  }
};
