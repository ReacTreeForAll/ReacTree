import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import React from 'react'

const Input = React.memo(
  ({
    type = 'text',
    width = '80%',
    placeHolder = '입력',
    fontSize = '24px',
    border = '1px solid black',
    ...props
  }) => {
    const backgroundColor = 'white'
    const hoveredColor = '#e5e5e5'
    const [inputText, setInputText] = useState('')
    const [hovered, setHovered] = useState(false)

    const setInputHovered = useCallback(() => {
      setHovered((prevHovered) => !prevHovered)
    }, [])

    const onChange = (event) => {
      setInputText((prevText) => event.target.value)
    }

    const containerStyle = {
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
    }

    const inputStyle = {
      type,
      width,
      height: 35,
      fontSize,
      fontWeight: 400,
      textAlign: 'center',
      backgroundColor: hovered ? hoveredColor : backgroundColor,
      boxSizing: 'border-box',
      border,
      placeholderTextSize: '8px',
    }

    return (
      <div style={{ ...containerStyle }}>
        <input
          type={type}
          value={inputText}
          placeholder={placeHolder}
          onMouseEnter={setInputHovered}
          onMouseLeave={setInputHovered}
          onChange={onChange}
          style={{ ...props.style, ...inputStyle }}
          {...props}
        />
      </div>
    )
  },
)

Input.propTypes = {
  type: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeHolder: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.string,
}

export default Input
