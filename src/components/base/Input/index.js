import PropTypes from 'prop-types'
import { useState } from 'react'
import React from 'react'

const Input = React.memo(
  ({
    type = 'text',
    width = '80%',
    placeHolder = '입력',
    fontWeight = 400,
    padding = '1em',
    borderRadius = '3px',
    ...props
  }) => {
    const backgroundColor = '#F2F2F2'
    const [inputText, setInputText] = useState('')
    const onChange = (event) => {
      setInputText((prevText) => event.target.value)
    }

    const inputStyle = {
      type,
      width,
      fontWeight: 400,
      backgroundColor,
      border: 'none',
      placeholderTextSize: '8px',
      outlineColor: '#14bd7e',
      borderRadius,
      padding,
    }

    return (
      <input
        type={type}
        value={inputText}
        placeholder={placeHolder}
        onChange={onChange}
        {...props}
        style={{ ...props.style, ...inputStyle }}
      />
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
