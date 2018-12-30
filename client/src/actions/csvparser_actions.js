import * as contentAPIutil from '../utils/contentAPI.js';

export const SEARCH_LIST_SET = 'SEARCH_LIST_SET'
export const SEARCH_LIST_CHANGE_SORT_VARIABLE = 'SEARCH_LIST_CHANGE_SORT_VARIABLE'
export const SEARCH_LIST_CHANGE_SORT_ASCDESC = 'SEARCH_LIST_CHANGE_SORT_ASCDESC';
export const SELECTED_FILE_CHANGE = 'SELECTED_FILE_CHANGE';


export function newCsvSubmitForImport(csvFile){
  const request = contentAPIutil.csvSubmitForImport(csvFile);
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

export function searchListChangeSort_Variable ( sortVariable ) {
  return {
    type: SEARCH_LIST_CHANGE_SORT_VARIABLE,
    sortVariable,
  }
};

export function handleChangeSelectedFile( selectedFile){
	
}
