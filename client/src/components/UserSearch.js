import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
          ButtonToolbar
          , ToggleButtonGroup
          , ToggleButton	  
        } from 'react-bootstrap';
import  {
          searchUserList
          ,searchListChangeSort_AscDesc
        } from '../actions/csvparser_actions.js';

class UserSearchComponent extends Component {
  
  render(){
    const {  searchListOrderAscDesc, searchListChangeSortAscDesc, attemptSearchUserList  } = this.props;
    return(
	  <div>
        <form onSubmit={attemptSearchUserList}>
          <div>
            <label>User Search:</label>
		    <Field name="searchField" id="searchField" component="input" type="text" onChange={attemptSearchUserList}/>
          </div>
        </form>
        <ButtonToolbar>
          <ToggleButtonGroup
            type="radio"
            name="searchListSortAscDesc"
            defaultValue={searchListOrderAscDesc}
            onChange={(event) => {
              searchListChangeSortAscDesc(event);
              }}
          >
            <ToggleButton value="asc">Ascending</ToggleButton>
            <ToggleButton value="desc">Descending</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>			
    )
  }
}
function mapStateToProps (state) {
  return {
      searchListOrderAscDesc: state.csvParserManager.searchListOrderAscDesc,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    attemptSearchUserList: (data) =>dispatch(searchUserList(data)),
    searchListChangeSortAscDesc: (data)=>dispatch(searchListChangeSort_AscDesc(data)),
  }
}


UserSearchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearchComponent)

// Decorate the form component
export default reduxForm({
  form: 'userSearchForm' // a unique name for this form
})(UserSearchComponent);
