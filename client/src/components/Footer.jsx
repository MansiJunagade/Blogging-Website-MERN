import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
  <footer>
    <ul className="footer__categories">
      <li><Link to="posts/categories/Agriculture">Agriculture</Link></li>
      <li><Link to="posts/categories/Finance">Finance</Link></li>
      <li><Link to="posts/categories/Education">Education</Link></li>
      <li><Link to="posts/categories/Entertainment">Entertainment</Link></li>
      <li><Link to="posts/categories/Art">Art</Link></li>
      <li><Link to="posts/categories/Technology">Technology</Link></li>
      <li><Link to="posts/categories/Uncategorized">Uncategorized</Link></li>
      <li><Link to="posts/categories/Health">Health</Link></li>
    </ul>
 <div className="footer__copyright">
  <small>All Right Reserved &copy; Copyright, abc.</small>
 </div>
  </footer>
  )
}
