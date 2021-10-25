import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import React from 'react'

const Button = React.memo(
  ({
    children = '버튼',
    width = 200,
    height = 100,
    textColor = 'black',
    backgroundColor = 'rgba(255, 248, 188, 1)',
    hoveredColor = 'rgba(220, 228, 170, 0.7)',
    fontWeight = 400,
    onClick,
    fontSize = '32px',
    borderRadius = '10px',
    ...props
  }) => {
    const [hovered, setHovered] = useState(false)

    const setButtonHovered = useCallback(() => {
      setHovered((prevHovered) => !prevHovered)
    }, [])

    const buttonStyle = {
      width,
      height,
      color: textColor,
      fontSize,
      fontWeight,
      borderRadius,
      backgroundColor: hovered ? hoveredColor : backgroundColor,
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: '5px 2px 2px gray',
    }

    return (
      <button
        onMouseEnter={setButtonHovered}
        onMouseLeave={setButtonHovered}
        onClick={onClick}
        style={{ ...props.style, ...buttonStyle }}
        {...props}>
        {children}
      </button>
    )
  },
)

Button.propTypes = {
  children: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fontWeight: PropTypes.number,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoveredColor: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.number,
}

export default Button
