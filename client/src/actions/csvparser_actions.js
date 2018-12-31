import * as contentAPIutil from '../utils/contentAPI.js';

export const SEARCH_LIST_SET = 'SEARCH_LIST_SET'
export const SEARCH_LIST_CHANGE_SORT_ASCDESC = 'SEARCH_LIST_CHANGE_SORT_ASCDESC';
export const SELECTED_FILE_CHANGE = 'SELECTED_FILE_CHANGE';
export const UPDATE_IS_FILE_LOADED = 'UPDATE_IS_FILE_LOADED';
export const USER_DETAILS_MODAL_SET_CLOSED = 'USER_DETAILS_MODAL_SET_CLOSED';

export function newCsvSubmitForImport(csvFile){
  const request = contentAPIutil.uploadCsvFile(csvFile);
  return (dispatch) => {
    request.then(function(result) {
      dispatch({type: 'SEARCH_LIST_SET', csvFile: csvFile })
    });
  }
}
export function searchListChangeSort_AscDesc ( sortDirection ) {
  return {
    type: SEARCH_LIST_CHANGE_SORT_ASCDESC,
    sortDirection,
  }
};
export function setUserDetailsModalClosed ( event ) {
  return {
    type: USER_DETAILS_MODAL_SET_CLOSED,
  }
};

export function searchUserList ( query ) {

};

export function handleChangeSelectedFile( selectedFile){
	
};
