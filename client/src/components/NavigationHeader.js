import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categoryListSet, fetchCategoryList } from '../actions/category_actions.js';
import keyIndex from 'react-key-index';
import { capitalize } from '../utils/helpers'


class NavBarInstance extends Component {
  state = {
    categoryList: [],
  }

  componentWillMount() {
    this.props.categoryListFetch();
  }



  render(){
    const { categoryList } = this.props

    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }

    return(
      <Navbar inverse collapseOnSelect defaultCollapsed>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Readable</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav >
              {categoryList.map((category,index) => (
                <NavItem  eventKey={index} key={index} id={index} href={"/"+category.path}>
                  <Link to={"/"+category.path}>{capitalize(category.name)}</Link>
                </NavItem>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
function mapStateToProps (state, props) {
  return {
      categoryList: state.categoryManager.categoryList,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    categoryListFetch: (data) =>dispatch(fetchCategoryList(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarInstance)
