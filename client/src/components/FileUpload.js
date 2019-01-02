import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newCsvSubmitForImport, handleChangeSelectedFile  } from '../actions/csvparser_actions.js';
import * as Sentry from '@sentry/browser';
import {  Button } from 'react-bootstrap';
import FieldFileInput from './FieldFileInput.js';

class FileUploadComponent extends Component {
  state = {
    categoryList: [],
    isNewPostModalOpen: 0,
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
	  console.log('We caught an error at UserSearch:', error);
      Sentry.captureException(error);
    });
  }

  onSubmit = values => {
    this.props.handleFileUploadAttempt(values);
  }

  render(){
    const {  myLocalError } = this.props;
    if(myLocalError){
      return (
        <Button onClick={() => Sentry.showReportDialog()}>Report feedback</Button>
      );
	} else {
	  return(
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <label>File Upload</label>
	  	    <Field name="uploadField" id="uploadField" component={FieldFileInput} type="file" onChange={this.handleSelectedFileChange}/>
            <Button id="uploadButton" onClick={this.handleFileUploadAttempt}>Upload</Button>
          </div>
        </form>
      )
	}
  }
};

function mapStateToProps (state, ownProps) {
  return {
	  myLocalError:state.csvParserManager.error,
  }
};

function mapDispatchToProps (dispatch) {
  return {
        handleSelectedFileChange: (data)=>dispatch(handleChangeSelectedFile(data)),
        handleFileUploadAttempt: data =>dispatch(newCsvSubmitForImport(data)),
  }
};


FileUploadComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploadComponent)

// Decorate the form component
export default reduxForm({
  form: 'fileUploadForm' // a unique name for this form
})(FileUploadComponent);
