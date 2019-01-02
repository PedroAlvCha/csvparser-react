import  {
          SEARCH_LIST_SET,
		  SEARCH_LIST_CHANGE_SORT_ASCDESC,
		  SELECTED_FILE_CHANGE,
		  UPDATE_IS_FILE_LOADED,
		  USER_DETAILS_MODAL_SET_CLOSED,
		  SET_ERROR, 
		  CLEAR_ERROR,
        } from '../actions/csvparser_actions.js'


const initialSearchListState = {
	searchQuery: '',
    searchList: [],
    searchListOrderAscDesc: 'desc',
	isUserDetailsModalOpen: false,
	selectedFileForUpload: null,
	isFileLoaded: 0,
	error: null,
}

export function csvParserManager (state = initialSearchListState, action) {

  switch (action.type) {
    case USER_DETAILS_MODAL_SET_CLOSED :
      return {
          ...state,
          isUserDetailsModalOpen:false,
      }
    case UPDATE_IS_FILE_LOADED :
      const localIsFileLoaded = action.payload
      return {
          ...state,
	      isFileLoaded: localIsFileLoaded,
      }
    case SELECTED_FILE_CHANGE :
      return {
          ...state,
          selectedFileForUpload: action.target.files[0],
	      isFileLoaded: 0,
      }
    case SEARCH_LIST_CHANGE_SORT_ASCDESC :
      return {
          ...state,
          searchListOrderAscDesc:action.sortDirection,
      }
    case SEARCH_LIST_SET :
      const searchListToOverWrite = action.payload
      return {
        ...state,
        searchList:searchListToOverWrite,
      }
    case SET_ERROR :
      const myError = action.payload;
	  console.log('We are at SET_ERROR reducer with error: ',myError);
      return {
        ...state,
        error:myError,
      }
    case CLEAR_ERROR :
      return {
        ...state,
        error:null,
      }
    default :
      return state
  }
}
