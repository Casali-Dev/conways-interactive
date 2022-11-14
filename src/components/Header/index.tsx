import { useState } from "react";
import { useCell } from "../../hooks/useCells";

import { FiArrowUp, FiArrowDown } from "react-icons/fi"

import { Options, OptionsButton, StyledHeader } from "./styles";

export default function Header() {
  const [isOptionsActive, setIsOptionsActive] = useState(false);

  const {updateCell} = useCell();

  return(
    <StyledHeader isOptionsActive={isOptionsActive ? 1 : 0}>
      <Options isOptionsActive={isOptionsActive ? 1 : 0} className={isOptionsActive ? "active" : ""}>
        <div className="alive">
          <h3>Choose a color for alive cells:</h3>
          <div className="buttonContainer">
            <button className="red" onClick={() => {
              updateCell("alive", "FF4444")
            }}></button>
            <button className="green" onClick={() => {
              updateCell("alive", "66FF66")
            }}></button>
            <button className="blue" onClick={() => {
              updateCell("alive", "6666FF")
            }}></button>
            <button className="yellow" onClick={() => {
              updateCell("alive", "FFFF66")
            }}></button>
            <button className="purple" onClick={() => {
              updateCell("alive", "8844ff")
            }}></button>
            <button className="black" onClick={() => {
              updateCell("alive", "000000")
            }}></button>
          </div>
        </div>
        <div className="dead">
          <h3>Choose a color for dead cells:</h3>
          <div className="buttonContainer">
          <button className="red" onClick={() => {
              updateCell("dead", "FF444466")
            }}></button>
            <button className="green" onClick={() => {
              updateCell("dead", "66FF6666")
            }}></button>
            <button className="blue" onClick={() => {
              updateCell("dead", "6666FF66")
            }}></button>
            <button className="yellow" onClick={() => {
              updateCell("dead", "FFFF6666")
            }}></button>
            <button className="purple" onClick={() => {
              updateCell("dead", "8844FF66")
            }}></button>
            <button className="black" onClick={() => {
              updateCell("dead", "CCCCCC")
            }}></button>
          </div>
        </div>
        <div className="shape">
          <h3>Choose the shape of the cells:</h3>
          <div className="buttonContainer">
            <button onClick={() => {
              updateCell("shape", "circle")
            }}></button>
            <button className="square" onClick={() => {
              updateCell("shape", "square")
            }}></button>
          </div>
        </div>
      </Options>
      <OptionsButton isOptionsActive={isOptionsActive ? 1 : 0} onClick={() => {
        setIsOptionsActive(!isOptionsActive);
      }}>
        { isOptionsActive ? <FiArrowUp/> : <FiArrowDown/> }
      </OptionsButton>
    </StyledHeader>
  )
}