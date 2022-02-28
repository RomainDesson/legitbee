import styled from "styled-components";

export const SearchSectionWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding-right: 5rem;
  padding-left: 5rem;
`

export const SearchBarWrapper = styled.div`

`

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`

export const StyledInput = styled.input<{h?: string, w?: string}>`
  height: ${(props) => props.h ? props.h : "35px"};
  width: ${(props) => props.w ? props.w : "300px"};
  font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 4px;
`