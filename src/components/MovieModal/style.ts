import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  display: flex;
  align-items: center;
`

export const ModalContent = styled.div`
  z-index: 100;
  background: rgba(245, 245, 245, 0.95);
  position: relative;
  margin: auto;
  border-radius: 5px;
  width: 50%;
  padding: 2rem;
  height: auto;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubTitleWrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const ModalTitle = styled.span`
  font-size: 35px;
  margin-bottom: 10px;
`

export const CloseButton = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  border: none;
  background: transparent;
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
`


export const PosterWrapper = styled.div`
  margin-right: 10px;
`

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
  grid-gap: 1rem;
`

export const VerticalDivider = styled.div`
  border: 1px solid black;
  height: 500px;
  margin-right: 1rem;
  margin-left: 1rem;
`

export const PlotWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  width: 30%;
  text-align: center;
`

export const SectionHeader = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`

export const PlotSubWrapper = styled.span`
  margin-top: 2rem
`