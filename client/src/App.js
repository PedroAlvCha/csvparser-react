import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploadInstance  from './FileUpload.js';
import UserSearchInstance from './UserSearch.js';


class App extends Component {
  render() {
    return (
      <div >
        <Route render={() => (
          <div >
            <NavBarInstance />
            <ListPostsComponent
              categorySelected={categoryForMe}
            />
          </div>
        )}/>
      </div>
    );
      <div className="App">
		<div>
		  <input type="file" name="uploadField" id="uploadField" onChange={this.handleselectedFile} />
          <button id="uploadButton" onClick={this.handleUpload}>Upload</button>
        </div>
		<div>
		  <input type="text" name="searchField" id="searchField" onChange={this.handleSearch} />
        </div>
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


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
