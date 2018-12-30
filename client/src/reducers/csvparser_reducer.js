import  {
          SEARCH_LIST_SET,
		  SEARCH_LIST_CHANGE_SORT_VARIABLE,
		  SEARCH_LIST_CHANGE_SORT_ASCDESC,
		  SELECTED_FILE_CHANGE,
        } from '../actions/csvparser_actions.js'
import _values from 'lodash.values';

const initialSearchListState = {
    searchList: [],
    searchListOrderBy: 'name',
    searchListOrderAscDesc: 'desc',
	isUserDetailsModalOpen: false,
	selectedFileForUpload: null,
	isFileLoaded: 0,
}

export function csvParserManager (state = initialSearchListState, action) {

  switch (action.type) {
    case SELECTED_FILE_CHANGE :
      return {
          ...state,
          selectedFileForUpload:.target.files[0],
	      isFileLoaded: 0,
      }
    case SEARCH_LIST_CHANGE_SORT_VARIABLE :
      return {
          ...state,
          searchListOrderBy:action.sortVariable,
      }
    case SEARCH_LIST_CHANGE_SORT_ASCDESC :
      return {
          ...state,
          searchListOrderAscDesc:action.sortDirection,
      }
    case USER_DETAILS_MODAL_OPEN :
      return {
          ...state,
          isUserDetailsModalOpen:true,
      }
    case USER_DETAILS_MODAL_CLOSE :
      return {
          ...state,
          isUserDetailsModalOpen:false,
        }
    case SEARCH_LIST_SET :
      const searchListToOverWrite = action.payload
      return {
        ...state,
        searchList:searchListToOverWrite,
      }
    default :
      return state
  }
}
