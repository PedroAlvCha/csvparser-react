import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Modal from 'react-modal';
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
        } from '../actions/csvparser_actions.js';

class ListUsersComponent extends Component {


  render(){
    const {   searchList
            , searchListOrderAscDesc
            , isUserDetailsModalOpen
			, userDetailsModalSetClosed
          } = this.props

    const orderedUserList = _orderBy(searchList, 'name', searchListOrderAscDesc)

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
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsersComponent)
