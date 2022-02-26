import styled from "styled-components";

export const CardWrapper = styled.div<{poster?: string }>`
  height: 600px;
  width: 350px;
  border-radius: 5px;
  background-image: url(${(props) => props ? props.poster : ""});
  background-position: center;
  background-size: cover;
  margin: 20px;
  scroll-snap-align: center;
  transition: transform 200ms ease-in-out;
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