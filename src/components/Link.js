import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  const clickLink = e => {
    e.preventDefault()
    onClick()
  }
  const dummyLink = e => {
    e.preventDefault()
  }
  return (
    <li>
      <a 
        href='#'
        className={ active ? "selected" : ""}
        onClick={ active ? dummyLink : clickLink }
      >
      { children }
      </a>
    </li>
  ) 
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
