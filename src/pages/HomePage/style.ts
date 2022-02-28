import styled from "styled-components";

export const HomeWrapper = styled.div<{movies: boolean}>`
  background-color: #27292b;
  padding: 0;
  color: white;
  height: ${(props) => props.movies ? "" : "100vh"}
`

export const MovieCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  padding-left: 50px;
  padding-right: 50px
`
export const NoMovieCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  background-color: #27292b;
  font-size: 65px;
`

export const TipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  padding-left: 110px;
  padding-right: 90px;
`

export const EnjoyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between;
  align-items: center;
`