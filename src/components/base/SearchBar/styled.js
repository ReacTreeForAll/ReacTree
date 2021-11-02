import styled from '@emotion/styled'

export const Search = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  &:focus {
    outline-color: rgba(220, 228, 170, 0.7);
  }
`

export const DataResult = styled.div`
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

export const DataItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  padding: 0;
`

export const DataItem = styled.div`
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
export const DataButton = styled.button`
  width: 35px;
  height: auto;
  border-radius: 50%;
  background-color: #14bd7e;
  color: white;
  box-sizing: 'border-box';
  border: none;
  box-shadow: '5px 2px 2px gray';
  cursor: 'pointer';
  &:hover {
    color: black;
    background-color: #f3f3f5;
  }
`
export const UserName = styled.div`
  text-align: center;
`
