import PropTypes from 'prop-types'
import { useState, useCallback } from 'react'
import React from 'react'

const Input = React.memo(
  ({
    type = 'text',
    width = '80%',
    placeHolder = '입력',
    fontSize = '24px',
    fontWeight = 400,
    padding = '1em',
    borderRadius = '3px',
    ...props
  }) => {
    const focusedColor = 'white'
    const backgroundColor = '#F2F2F2'
    const [inputText, setInputText] = useState('')
    const [focused, setFocused] = useState(false)

    const setInputFocus = useCallback(() => {
      setFocused((prevFocus) => !prevFocus)
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
      height: '35px',
      fontSize,
      fontWeight: 400,
      backgroundColor: focused ? focusedColor : backgroundColor,
      boxSizing: 'border-box',
      border: 'none',
      placeholderTextSize: '8px',
      outlineColor: '#14bd7e',
      borderRadius,
      padding,
    }

    return (
      <div style={{ ...containerStyle }}>
        <input
          type={type}
          value={inputText}
          placeholder={placeHolder}
          onChange={onChange}
          onFocus={setInputFocus}
          onBlur={setInputFocus}
          {...props}
          style={{ ...props.style, ...inputStyle }}
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
  fontWeight: PropTypes.number,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRadius: PropTypes.string,
}

export default Input
