import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import ImgPath from '../../../assets/leaf.png'

const SearchBar = ({ placeholder = 'Search', data, handler, children, src ...props }) => {
  const [filteredData, setFilteredData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleBlur = (event) => {
    if (event.currentTarget === event.target) {
      setFilteredData(() => [])
    }
  }

  const handleFilter = (event) => {
    event.stopPropagation()
    const searchName = event.target.value
    const newFilter = MOCK.filter((value) => {
      return value.fullName.name.toLowerCase().includes(searchName.toLowerCase())
    })

    if (searchName === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <>
      <Search onBlur={handleBlur}>
        <Form onSubmit={handleSubmit}>
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
        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <DataItemContainer key={key}>
                  <DataItem>
                    <Avatar size={35} src={src} />
                    <UserName>{value.fullName.name}</UserName>
                  </DataItem>
                  {children}
                </DataItemContainer>
              )
            })}
          </DataResult>
        )}
      </Search>
    </>
  )
}

const Search = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  margin: auto;
`
const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 15px;
  border: none;
  border-radius: 100px;
  &:focus {
    outline-color: rgba(220, 228, 170, 0.7);
  }
`

const DataResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 95%;
  height: 150px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 2;
  margin: auto;
`

const DataItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  padding: 0;
`

const DataItem = styled.div`
  display: flex;
  flex-grow: 4;
  line-height: 35px;
  font-size: 16px;
  color: black;
  &:hover {
    background-color: gray;
  }
  margin: auto;
`
const UserName = styled.div`
  text-align: center;
`

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array,
  handler: PropTypes.func,
  children: PropTypes.elementType,
  src: PropTypes.string,
}

const MOCK = [
  {
    _id: '1',
    fullName: { name: 'seungrok' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '2',
    fullName: { name: 'Daseul' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '3',
    fullName: { name: 'Gilgameshi' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '4',
    fullName: { name: 'Muntari' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '5',
    fullName: { name: 'Soorim' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '6',
    fullName: { name: 'minjoeng' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '7',
    fullName: { name: 'Daseul' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '8',
    fullName: { name: 'Lia' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '6',
    fullName: { name: 'SunSoo' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '7',
    fullName: { name: 'Michael' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '8',
    fullName: { name: 'Gray' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '9',
    fullName: { name: 'Artoria' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '10',
    fullName: { name: 'Rider' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
  {
    _id: '11',
    fullName: { name: 'Lancer' },
    email: 'mike123@naver.com',
    createdAt: '2021-10-12',
    updatedAt: '2021-10-12',
  },
]

export default SearchBar
