import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Modal from 'react-modal';
import _map from 'lodash.map';
import _orderBy from 'lodash.orderby';
import _filter from 'lodash.filter';
import  {
          fetchPostList
          ,postListChangeSort_Variable
          ,postListChangeSort_AscDesc
          ,newPostModalOpen
          ,newPostModalClose
          ,newPostFormSubmit
        } from '../actions/post_actions.js';
import {
          ListGroup
          , ListGroupItem
          , ButtonToolbar
          , ToggleButtonGroup
          , ToggleButton
          , DropdownButton
          , MenuItem
          , Button
          , Modal
        } from 'react-bootstrap';
import PostSummaryComponent  from './PostSummary.js';
import PostAddComponent from './PostAdd.js';

class ListPostsComponent extends Component {
  state = {
    postList: [],
    postListOrderBy: '',
    postListOrderAscDesc:'',
    isNewPostModalOpen: 0,
    categorySelected: ''
  }

  componentWillMount() {
    this.props.postListFetch();
  }

  render(){
    const {   postList
            , postListOrderBy
            , postListOrderAscDesc
            , postListSortAscDescChange
            , postListSortVariableChange
            , isNewPostModalOpen
            , newPostModalSetOpen
            , newPostModalSetClosed
          } = this.props

    const orderedPostList = _orderBy(postList, postListOrderBy, postListOrderAscDesc)

    return(
      <div>
        <div>
          <ButtonToolbar>
            <DropdownButton
                title="Sort By"
                id="bg-nested-dropdown"
                onSelect={(event) => {
                  postListSortVariableChange(event);
                }}
            >
              <MenuItem eventKey="author">Author</MenuItem>
              <MenuItem eventKey="timestamp">Post Date</MenuItem>
              <MenuItem eventKey="title">Title</MenuItem>
              <MenuItem eventKey="voteScore">Vote Score</MenuItem>
            </DropdownButton>
            <ToggleButtonGroup
                type="radio"
                name="postListSortAscDesc"
                defaultValue={postListOrderAscDesc}
                onChange={(event) => {
                  postListSortAscDescChange(event);
                }}
              >
              <ToggleButton value="asc">Ascending</ToggleButton>
              <ToggleButton value="desc">Descending</ToggleButton>
            </ToggleButtonGroup>
            <Button
              bsStyle="primary"
              onClick={(event) => {
                newPostModalSetOpen(event);
              }}
            >Post</Button>
          </ButtonToolbar>
        </div>
        <ListGroup>
          {_map(orderedPostList, post =>
            <ListGroupItem key={post.id}>
              <PostSummaryComponent
                postID={post.id}
              />
            </ListGroupItem>
          )}
        </ListGroup>
        <Modal
          isOpen={isNewPostModalOpen}
          onRequestClose={(event) => {
            newPostModalSetClosed(event);
          }}
          contentLabel='Add New Post'
        >
          <PostAddComponent></PostAddComponent>
        </Modal>
        <Modal
          show={isNewPostModalOpen}
          onHide={newPostModalSetClosed}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Add New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostAddComponent></PostAddComponent>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps (state, ownProps) {
  let localPostList
  console.log('state.postManager.postList',state.postManager.postList);
  if((ownProps.categorySelected ===undefined)|(ownProps.categorySelected ==='')){
    localPostList= state.postManager.postList
  }
  else{
    localPostList= _filter(state.postManager.postList, {'category': ownProps.categorySelected})
  }
  console.log('ownProps',ownProps);
  console.log('localPostList',localPostList);
  return {
      postList:localPostList,
      postListOrderBy: state.postManager.postListOrderBy,
      postListOrderAscDesc: state.postManager.postListOrderAscDesc,
      isNewPostModalOpen: state.postManager.isNewPostModalOpen,
      categorySelected: ownProps.categorySelected,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postListFetch: (data) =>dispatch(fetchPostList(data)),
    postListSortVariableChange: (data)=>dispatch(postListChangeSort_Variable(data)),
    postListSortAscDescChange: (data)=>dispatch(postListChangeSort_AscDesc(data)),
    newPostModalSetOpen: (data)=>dispatch(newPostModalOpen(data)),
    newPostModalSetClosed: (data)=>dispatch(newPostModalClose(data)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsComponent)
