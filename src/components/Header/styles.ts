import styled from "styled-components";

interface Props {
  isOptionsActive: number;
}

export const StyledHeader = styled.header<Props>`
  pointer-events: ${props => props.isOptionsActive ? "auto" : "none"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.isOptionsActive ? "21rem" : "9rem"};
  background-color: ${props => props.isOptionsActive ? "#000000AA" : "transparent"};

  transition: all 0.2s;

  z-index: 1000;
`

export const Options = styled.div<Props>`
  display: flex;

  max-width: 1920px;

  gap: 3rem;

  align-items: center;
  justify-content: space-between;

  height: ${props => props.isOptionsActive ? "9rem" : "0rem"};
  overflow: hidden;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 3rem;
    height: 3rem;

    border: none;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 20rem;
    color: #FFFFFF;

    h3 {
      margin-bottom: .5rem;
    }
  }

  .dead {
    button {
      filter: opacity(0.625);
    }
    button.black {
        background-color: #CCCCCC;
      }
  }

  .buttonContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: .5rem;

    button {
      width: 2rem;
      height: 2rem;
    }

    .red {
      background-color: #FF4444;
    }
    .blue {
      background-color: #6666FF;
    }
    .yellow {
      background-color: #FFFF66;
    }
    .green {
      background-color: #66FF66;
    }
    .purple {
      background-color: #8844ff;
    }
    .black {
      background-color: #000000;
    }
    .square {
      border-radius: 0;
    }
  }
`

export const OptionsButton = styled.button<Props>`
  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;

  border: none;
  border-radius: 50%;

  color: #FFFFFF;
  font-size: 1rem;
  background-color: ${props => props.isOptionsActive ? "#AA88FF" : "#6611CD"};
  transform: ${props => props.isOptionsActive ? "translateY(3rem)" : "translateY(0rem)"};

  transition: all 0.2s;

  &:hover {
      filter: brightness(1.2)
    }
`