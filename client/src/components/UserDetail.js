import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserDetailComponent extends Component {


  render(){

    return(
      <div>
        I AM A USER DETAIL
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailComponent)
