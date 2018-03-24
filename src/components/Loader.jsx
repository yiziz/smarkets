import React from 'react'
import PropTypes from 'prop-types'

export const Loader = ({ children, loading }) => {
  const contentStyle = {}
  if (loading) {
    contentStyle.display = 'none'
  }

  const loaderEl = (
    <div id="loading-overlay-inner">
      <div className="loading-spinner-big">
        <span className="loading-spinner -normal -dark ">
          <progress className="only-for-a11y" />
        </span>
        <p className="message">Loading</p>
      </div>
    </div>
  )

  return (
    <div style={{ textAlign: loading ? 'center' : 'inherit', position: 'relative' }}>
      {loading && loaderEl}
      {!loading &&
        <div style={contentStyle}>
          {typeof children === 'function' ? children() : children}
        </div>
      }
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  loading: PropTypes.bool,
}

Loader.defaultProps = {
}

export default Loader
