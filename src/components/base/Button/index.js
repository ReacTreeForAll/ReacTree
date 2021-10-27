import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import React from 'react'

const Button = React.memo(
  ({
    children = '회원가입',
    width = '65%',
    height = '40px',
    textColor = 'white',
    backgroundColor = '#14bd7e',
    hoveredColor = '#f3f3f5',
    fontWeight = 700,
    onClick,
    fontSize = '0.8em',
    borderRadius = '10px',
    margin = '10px',
    ...props
  }) => {
    const [hovered, setHovered] = useState(false)

    const setButtonHovered = useCallback(() => {
      setHovered((prevHovered) => !prevHovered)
    }, [])

    const buttonStyle = {
      width,
      height,
      color: hovered ? 'black' : 'white',
      fontSize,
      fontWeight,
      borderRadius,
      backgroundColor: hovered ? hoveredColor : backgroundColor,
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: '5px 2px 2px gray',
      cursor: 'pointer',
    }

    return (
      <button
        onMouseEnter={setButtonHovered}
        onMouseLeave={setButtonHovered}
        onClick={onClick}
        {...props}
        style={{ ...props.style, ...buttonStyle }}>
        {children}
      </button>
    )
  },
)

Button.propTypes = {
  children: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.number,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoveredColor: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Button
