import React, {
  PropTypes,
} from 'react';
import {
  connect,
} from 'react-redux';
import Helmet from 'react-helmet';
import {
  injectIntl,
  FormattedMessage,
} from 'react-intl';
import {
  getShowEditPost,
} from '../../../App/AppReducer';
import { Link } from 'react-router';
// Import Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { fetchPost, editPostRequest } from '../../PostActions';

// Import Selectors
import { getPost } from '../../PostReducer';
// is that necessary???
import { toggleEditPost } from '../../../App/AppActions';


export class PostDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.post.name,
      title: this.props.post.title,
      content: this.props.post.content,
      votes: this.props.post.votes,
    };
  }
  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  }
  handleEditPost = () => {
    this.props.toggleEditPost();
    this.props.editPostRequest(this.state);
  }
  handleCancelPost = () => {
    this.props.toggleEditPost();
  }
  renderPostForm = () => {
    return (
      <div className={styles['form-content']}>
        <h2 className={styles['form-title']}><FormattedMessage id="editPost" /></h2>
        <input
          placeholder={this.props.intl.messages.authorName}
          className={styles['form-field']}
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
        />
        <input
          placeholder={this.props.intl.messages.postTitle}
          className={styles['form-field']}
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          type="text"
        />
        <textarea placeholder={this.props.intl.messages.postContent} className={styles['form-field']} name="content" value={this.state.content} onChange={this.handleInputChange} />
        <a className={'btn btn-success'} href="#" onClick={this.handleEditPost}><FormattedMessage id="accept" /></a>
        <a className={`${styles['cancel-post-button']} btn btn-danger`} href="#" onClick={this.handleCancelPost}><FormattedMessage id="cancel" /></a>
      </div>
    );
  }
  renderPost = () => {
    return (
      <div className={`container ${styles['full-height']}`}>
        <div className={`${styles['single-post']} ${styles['post-detail']}`}>
          <Link to={'/'} className={`${styles['edit-post-button']} btn btn-primary`}> Back
          </Link>
          <a className={`${styles['edit-post-button']} btn btn-warning`} href="#" onClick={this.props.toggleEditPost}>
            <FormattedMessage id="editPost" />
            <FontAwesomeIcon icon="pencil-alt" />
          </a>
          <h3 className={styles['post-title']}>{this.props.post.title}</h3>
          <p className={styles['author-name']}>
            <FormattedMessage id="by" /> {this.props.post.name}</p>
          <p className={styles['post-desc-inside']}>{this.props.post.content}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div >
        <Helmet title={this.props.post.title} />
        <div className={styles['edit-post-wrapper']}>
        </div>
        {
          this.props.showEditPost
            ? this.renderPostForm()
            : this.renderPost()
        }
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    showEditPost: getShowEditPost(state),
  };
}
function mapDispatchToProps(dispatch, props) {
  return {
    toggleEditPost: () => dispatch(toggleEditPost()),
    editPostRequest: (post) => dispatch(editPostRequest(props.params.cuid, post)),
  };
}

PostDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  intl: PropTypes.shape({
    messages: PropTypes.shape({
      authorName: PropTypes.string.isRequired,
      postTitle: PropTypes.string.isRequired,
      postContent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  showEditPost: PropTypes.bool.isRequired,
  toggleEditPost: PropTypes.func.isRequired,
  editPostRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PostDetailPage));
