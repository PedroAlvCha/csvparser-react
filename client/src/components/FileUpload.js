import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newCsvSubmitForImport, handleChangeSelectedFile  } from '../actions/csvparser_actions.js';
import {  Button } from 'react-bootstrap';

class FileUploadComponent extends Component {
  state = {
    categoryList: [],
    isNewPostModalOpen: 0,
  }


  onSubmit = values => {
    this.props.handleFileUploadAttempt(values);
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label>File Upload</label>
		  <Field  id="uploadField" component="input" type="file" onChange={this.handleSelectedFileChange}/>
          <Button id="uploadButton" onClick={this.handleFileUploadAttempt}>Upload</Button>
        </div>
      </form>
    )
  }
};

function mapStateToProps (state, ownProps) {
  return {
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
