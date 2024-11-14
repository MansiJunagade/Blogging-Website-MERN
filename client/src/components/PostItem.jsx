import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import PropTypes from 'prop-types';

const PostItem = ({ postID, category, title, desc, authorID, thumbnail, createdAt }) => {
  const shortDescription = desc.length > 145 ? desc.substr(0, 145) +'...' : desc;
  const postTitle = title.length > 30 ? title.substr(0, 30) +'...' : title;
  return (
    <article className='post'>
      <div className="post__thumbnail">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{postTitle}</h3>
        </Link>
        <p dangerouslySetInnerHTML={{__html: shortDescription}}></p>
        <div className='post__footer'>
          <PostAuthor authorID={authorID} createdAt={createdAt}/>
          <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
        </div>
      </div>
    </article>
  )
}
// Adding PropTypes for type checking
PostItem.propTypes = {
  postID: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string,
  desc: PropTypes.string,
  authorID: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

// Adding default props
PostItem.defaultProps = {
  title: '',
  desc: '',
  thumbnail: '',
};


export default PostItem