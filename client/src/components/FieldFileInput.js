import React, { Component } from 'react';
import { connect } from 'react-redux';

class FieldFileInput  extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    const { input } = this.props  
    return(
     <div>
       <div>
         <input
          type='file'
          accept='*'
          onChange={this.onChange}
         />
       </div>
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
)(FieldFileInput)