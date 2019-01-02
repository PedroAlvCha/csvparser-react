import React, { Component } from 'react';
import { connect } from 'react-redux';
import _map from 'lodash.map';
import _orderBy from 'lodash.orderby';

import {
          ListGroup
          , ListGroupItem
          , Modal
        } from 'react-bootstrap';
import UserDetailComponent  from './UserDetail.js';
import  {
          setUserDetailsModalClosed, 
		  setError,
        } from '../actions/csvparser_actions.js';
import * as Sentry from '@sentry/browser';
import {  Button } from 'react-bootstrap';


class ListUsersComponent extends Component {

  componentDidCatch(error, errorInfo) {
    const {   errorSet   } = this.props
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
	  console.log('We caught an error at UserList:', error);
      Sentry.captureException(error);
    });
	errorSet({ error });
  }
  render(){
    const {   searchList
            , searchListOrderAscDesc
            , isUserDetailsModalOpen
			, userDetailsModalSetClosed
			, myLocalError
          } = this.props

    const orderedUserList = _orderBy(searchList, 'name', searchListOrderAscDesc)
		if(myLocalError){
          return (
              <Button onClick={() => Sentry.showReportDialog()}>Report feedback</Button>
          );
		} else {
			return(
			  <div>
				<ListGroup>
				  {_map(orderedUserList, user =>
					<ListGroupItem key={user.id}>
					  <UserDetailComponent
						userID={user.id}
					  />
					</ListGroupItem>
				  )}
				</ListGroup>
				<Modal
				  show={isUserDetailsModalOpen}
				  onRequestClose={(event) => {
					userDetailsModalSetClosed(event);
				  }}
				  contentLabel='User Details'
				>
				  <UserDetailComponent></UserDetailComponent>
				</Modal>
			  </div>
			)
		}
  }
}
function mapStateToProps (state) {
  return {
      userSearchList:state.csvParserManager.searchList,
      searchListOrderAscDesc: state.csvParserManager.searchListOrderAscDesc,
      isUserDetailsModalOpen: state.csvParserManager.isUserDetailsModalOpen,
  }
}

function mapDispatchToProps (dispatch) {
  return {
	  userDetailsModalSetClosed: (data) =>dispatch(setUserDetailsModalClosed(data)),
	  errorSet: (data) =>dispatch(setError(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsersComponent)
