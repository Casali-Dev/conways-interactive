import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  padding: 1px;
  gap: 1px;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  gap: 1px;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 100;

  button {
    display: flex;
    gap: .5rem;

    border: none;
    border-radius: 0.3rem;

    padding: 1rem 1.5rem;

    color: #FFFFFF;
    font-size: 1rem;
    background-color: #6611CD;

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2)
    }

    &:disabled {
      filter: opacity(0.625);
    }
  }
`