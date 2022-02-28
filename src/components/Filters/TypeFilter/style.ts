import styled from "styled-components";

export const FiltersNAmeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 260px;
  justify-content: space-between;
  margin-top: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`

export const FilterTag = styled.span<{isActive: boolean}>`
  font-weight: ${(props) => props.isActive ? "bold" : ""};
`