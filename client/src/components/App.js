import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FileUploadComponent  from './FileUpload.js';
import UserSearchComponent from './UserSearch.js';
import UserListComponent  from './UserList.js';
import * as Sentry from '@sentry/browser';
import {  Button } from 'react-bootstrap';

Sentry.init({
 dsn: "https://e354b6be442b42c88284daa1a60017cf@sentry.io/1361010"
});

class App extends Component {

    componentDidCatch(error, errorInfo) {
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
		console.log('We caught an error at APP:', error);
        Sentry.captureException(error);
      });
    }
    render() {
		const {   myLocalError  } = this.props;
		if(myLocalError){
          return (
              <Button onClick={() => Sentry.showReportDialog()}>Report feedback</Button>
          );
		} else {
		  return (
			<div>
			  <FileUploadComponent />
			  <UserSearchComponent />
			  <UserListComponent />
			</div>
		  );		
		}
	}
}

function mapStateToProps (state) {
  return {
	  myLocalError:state.csvParserManager.error,
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

