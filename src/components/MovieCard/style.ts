import styled from "styled-components";

export const CardWrapper = styled.div<{poster?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 600px;
  width: 350px;
  border-radius: 5px;
  background-image: url(${(props) => props ? props.poster : ""});
  background-position: center;
  background-size: cover;
  margin: 20px;
  scroll-snap-align: center;
  transition: 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const NoImageFoundWrapper = styled.div`
  font-size: 23px;
  padding: 2rem;
  text-align: center;
  color: aliceblue;
`

export const MovieTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  background-color: rgba(14, 11, 13, 0.9);
`

