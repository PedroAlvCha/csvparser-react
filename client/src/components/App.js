import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FileUploadComponent  from './FileUpload.js';
import UserSearchComponent from './UserSearch.js';
import UserListComponent  from './UserList.js';
import UserDetailComponent from './UserDetail.js';


class App extends Component {
  render() {
    return (

			<div>
				<FileUploadComponent />
				<UserSearchComponent />
				<UserListComponent />
			</div>

    );
  }
}

function mapStateToProps (state) {
}

function mapDispatchToProps (dispatch) {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

