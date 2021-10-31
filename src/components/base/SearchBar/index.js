import React, { useCallback } from 'react'
import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import {
  Search,
  Form,
  SearchInput,
  DataResult,
  DataItemContainer,
  DataItem,
  UserName,
  DataButton,
} from './styled'
import { MOCK } from './Data'

const SearchBar = ({ placeholder = 'Search', data, handler, children, src, ...props }) => {
  const [filteredData, setFilteredData] = useState([])
  const modalEl = useRef(null)
  const [isOpen, setOpen] = useState(false)

  const handleClickOutside = useCallback(
    ({ target }) => {
      if (isOpen && !modalEl.current.contains(target)) {
        setOpen(false)
      }
    },
    [isOpen],
  )

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [modalEl, handleClickOutside])

  const handleOnClick = (event) => {
    const targetUserName = event.target.parentNode.getAttribute('data-userinfo')
    alert(`${targetUserName}를 follow했습니다`)
  }

  const handleFilter = (event) => {
    event.stopPropagation()
    const searchName = event.target.value
    const newFilter = MOCK.filter((value) => {
      return value.fullName.name.toLowerCase().includes(searchName.toLowerCase())
    })

    if (searchName === '') {
      setFilteredData([])
      setOpen(false)
    } else {
      setFilteredData(newFilter)
      setOpen(true)
    }
  }

  return (
    <>
      <Search>
        <Form
          onSubmit={(event) => {
            event.preventDefault()
          }}>
          <label htmlFor="friend-search" />
          <SearchInput
            id="friend-search"
            type="search"
            width="100%"
            padding="10px 35px 10px 15px"
            borderRadius="100px"
            placeholder={placeholder}
            onChange={handleFilter}
            autoComplete="off"
          />
        </Form>
        {isOpen && (
          <DataResult ref={modalEl}>
            {filteredData.slice(0, 15).map((value, key) => {
              const userName = value.fullName.name
              return (
                <DataItemContainer key={key} data-userinfo={userName}>
                  <DataItem>
                    <Avatar size={35} src={src} />
                    <UserName>{userName}</UserName>
                  </DataItem>
                  <DataButton onClick={handleOnClick}>{'follow'}</DataButton>
                </DataItemContainer>
              )
            })}
          </DataResult>
        )}
      </Search>
    </>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array,
  handler: PropTypes.func,
  children: PropTypes.any,
}

export default SearchBar
