import styled from '@emotion/styled'

export const Search = styled.div`
  width: 100%;
  margin: 0 autop;
  font-size: 32px;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  margin: auto;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 15px;
  border: none;
  border-radius: 100px;
  font-size: 0.5em;
  color: #2b2b2b;
  &:focus {
    outline-color: rgba(220, 228, 170, 0.7);
  }
`

export const DataResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  width: 100%;
  height: 150px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 2;
  margin: auto;
`

export const DataItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
`

export const DataItem = styled.div`
  display: flex;
  flex-grow: 1;
  line-height: 35px;
  font-size: 16px;
  color: black;
  &:hover {
    background-color: gray;
  }
  margin: auto;
`
export const DataButton = styled.button`
  display: block;
  width: 60px;
  height: auto;
  border-radius: 50%;
  background-color: #14bd7e;
  color: white;
  border: none;
  font-size: 0.2em;
  box-shadow: 0 1px 3px black;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: #f3f3f5;
  }
`
