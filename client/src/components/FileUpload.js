import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { capitalize, renderField, validateRequired } from '../utils/helpers'
import  { newPostFormSubmit, newPostModalClose  } from '../actions/post_actions.js';
import {  Button  } from 'react-bootstrap';

class FileUploadComponent extends Component {
  state = {
    categoryList: [],
    isNewPostModalOpen: 0,
  }


  onSubmit = values => {
    this.props.handleFileUploadAttempt(values);
  }

  render(){
    const { selectedFileForUpload,  isFileLoaded, value } = this.props


    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div>
          <label>File Upload</label>
		  <input type="file" name="uploadField" id="uploadField" onChange={this.handleSelectedFileChange} />
          <button id="uploadButton" onClick={this.handleFileUploadAttempt}>Upload</button>
          <Button onClick={newPostModalSetClosed}>Cancel</Button>
        </div>
      </form>
    )
  }
};

function mapStateToProps (state, ownProps) {
  return {
      selectedFileForUpload: state.csvParserManager.selectedFileForUpload,
      isFileLoaded: state.csvParserManager.isFileLoaded,
  }
};

function mapDispatchToProps (dispatch) {
  return {
        handleSelectedFileChange: (data)=>dispatch(handleChangeSelectedFile(data)),
        handleFileUploadAttempt: data =>dispatch(handleFileUpload(data)),
  }
};


FileUploadComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUploadComponent)

// Decorate the form component
export default reduxForm({
  form: 'NewPost' // a unique name for this form
})(FileUploadComponent);
