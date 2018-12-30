import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import NavBarInstance  from './NavigationHeader.js';
import ListPostsComponent from './PostList.js';


class App extends Component {
  render() {
    const  categoryForMe  = this.props.match.params.category;
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
