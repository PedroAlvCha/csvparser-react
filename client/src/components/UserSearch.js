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
import * as Sentry from '@sentry/browser';
import {  Button } from 'react-bootstrap';

		
Sentry.init({
 dsn: "https://e354b6be442b42c88284daa1a60017cf@sentry.io/1361010"
});

class UserSearchComponent extends Component {
	
  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
	  console.log('We caught an error at UserSearch:', error);
      Sentry.captureException(error);
    });
  }
  render(){
    const {  searchListOrderAscDesc
	         , searchListChangeSortAscDesc
			 , attemptSearchUserList  
			 , myLocalError } = this.props;
			 
    if(myLocalError){
      return (
        <Button onClick={() => Sentry.showReportDialog()}>Report feedback</Button>
      );
	} else {
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
}
function mapStateToProps (state) {
  return {
      searchListOrderAscDesc: state.csvParserManager.searchListOrderAscDesc,
	  myLocalError:state.csvParserManager.error,
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
